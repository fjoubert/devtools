import { ChangeEvent, useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';
import HumanizeDuration from 'humanize-duration';
import withErrorHandling, { ErrorHandlerProps } from '../util/withErrorHandingWrapper';

interface ITimestampsProps {
    timestamp: DateTime,
    unixTimestamp: number,
    isoTimestamp: string,
    RFC2822: string,
    localeString: string,
    formattedString: string,
}

interface IDurationsProps {
    seconds: number,
    formattedString: string,
    humanized: string,
}

const maxTimestamp = 999999999999;

const Time = (errorHandlerProps: ErrorHandlerProps) => {

    const [timeFormat, setTimeFormat] = useState<string>("yyyy-MM-dd HH:mm:ss.SSS");
    const [durationFormat, setDurationFormat] = useState<string>("h:mm:ss");

    const [timestamps, setTimestamps] = useState<ITimestampsProps>({
        timestamp: DateTime.utc(),
        unixTimestamp: 0,
        isoTimestamp: '',
        RFC2822: '',
        localeString: '',
        formattedString: '',
    });
    const [durations, setDurations] = useState<IDurationsProps>({
        seconds: 0,
        formattedString: '',
        humanized: '',
    });

    useEffect(() => {
        setTimestamps(computeTimestamps(DateTime.utc().toSeconds(), timeFormat));
        setDurations(computeDurations(7201, durationFormat));
    }, [durationFormat, timeFormat]);

    const setNow = () => {
        setTimestamps(computeTimestamps(DateTime.utc().toSeconds(), timeFormat));
    };

    const handleUnixInputChange = withErrorHandling((e: ChangeEvent<HTMLInputElement>) => {
        setTimestamps(computeTimestamps(parseInt(e.target.value), timeFormat));
    }, errorHandlerProps);

    const handleTimeISOInputChange = withErrorHandling((e: ChangeEvent<HTMLInputElement>) => {
        let newDateTime = DateTime.fromISO(e.target.value);
        if (!newDateTime.isValid) {
            setTimestamps({
                ...timestamps,
                isoTimestamp: e.target.value
            });
            throw new Error(newDateTime.invalidExplanation!);
        }
        setTimestamps(computeTimestamps(newDateTime.toSeconds(), timeFormat));
    }, errorHandlerProps);

    const handleRFC2822InputChange = withErrorHandling((e: ChangeEvent<HTMLInputElement>) => {
        let newDateTime = DateTime.fromRFC2822(e.target.value);
        if (!newDateTime.isValid) {
            setTimestamps({
                ...timestamps,
                RFC2822: e.target.value
            });
            throw new Error(newDateTime.invalidExplanation!);
        }
        setTimestamps(computeTimestamps(newDateTime.toSeconds(), timeFormat));
    }, errorHandlerProps);

    const handleTimeFormattedInputChange = withErrorHandling((e: ChangeEvent<HTMLInputElement>) => {
        let newDateTime = DateTime.fromFormat(e.target.value, timeFormat);
        if (!newDateTime.isValid) {
            setTimestamps({
                ...timestamps,
                formattedString: e.target.value
            });
            throw new Error(newDateTime.invalidExplanation!);
        }
        setTimestamps(computeTimestamps(newDateTime.toSeconds(), timeFormat));
    }, errorHandlerProps);

    const handleDurationSecondsInputChange = withErrorHandling((e: ChangeEvent<HTMLInputElement>) => {
        setDurations(computeDurations(parseInt(e.target.value), durationFormat));
    }, errorHandlerProps);

    const handleFocus = (e: ChangeEvent<HTMLInputElement>) => e.target.select();
    const handleTextareaFocus = (e: ChangeEvent<HTMLTextAreaElement>) => e.target.select();

    return (
        <div className="timeTool">
            <span className="divider">Time<button onClick={setNow}>Now</button></span>
            <div className="timeRow">
                <label htmlFor="inputUnix">Unix (seconds)</label>
                <input
                    id="inputUnix"
                    autoFocus
                    type="text"
                    min="0"
                    max={maxTimestamp}
                    value={timestamps.unixTimestamp}
                    onChange={handleUnixInputChange}
                />
            </div>
            <div className="timeRow">
                <label htmlFor="inputFormat">Format</label>
                <a href="https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens" target="_blank" rel="noreferrer">?</a>
                <input
                    id="inputFormat"
                    type="text"
                    value={timeFormat}
                    onChange={(e) => setTimeFormat(e.target.value)}
                />
            </div>
            <div className="timeRow">
                <label htmlFor="inputFormattedString">Formatted String</label>
                <input
                    id="inputFormattedString"
                    type="text"
                    value={timestamps.formattedString}
                    onChange={handleTimeFormattedInputChange}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label htmlFor="inputISO">ISO 8601</label>
                <input
                    id="inputISO"
                    type="text"
                    value={timestamps.isoTimestamp}
                    onChange={handleTimeISOInputChange}
                    onFocus={handleFocus} />
            </div>
            <div className="timeRow">
                <label htmlFor="inputRFC2822">RFC2822</label>
                <input
                    id="inputRFC2822"
                    type="text"
                    value={timestamps.RFC2822}
                    onChange={handleRFC2822InputChange}
                    onFocus={handleFocus}
                />
            </div>
            <span className="divider">Duration</span>
            <div className="timeRow">
                <label htmlFor="inputDurationSeconds">Duration (seconds)</label>
                <input
                    id="inputDurationSeconds"
                    type="text"
                    value={durations!.seconds}
                    onChange={handleDurationSecondsInputChange}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label htmlFor="inputDurationFormat">Format</label>
                <a href="https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens" target="_blank" rel="noreferrer">?</a>
                <input
                    id="inputDurationFormat"
                    type="text"
                    value={durationFormat}
                    onChange={(e) => setDurationFormat(e.target.value)}
                />
            </div>
            <div className="timeRow">
                <label htmlFor="inputFormattedDurationString">Formatted String</label>
                <input
                    id="inputFormattedDurationString"
                    type="text"
                    defaultValue={durations!.formattedString}
                    onFocus={handleFocus}
                />
            </div>

            <label className="divider" htmlFor="inputHumanized">Humanized</label>
            <textarea
                id="inputHumanized"
                defaultValue={durations!.humanized}
                onFocus={handleTextareaFocus}
            />
        </div>
    );
};

function computeDurations(seconds: number, durationFormat: string) {
    let newSeconds = seconds;
    if (isNaN(seconds)) {
        newSeconds = 0;
    }
    return {
        seconds: seconds,
        formattedString: Duration.fromMillis(newSeconds * 1000).toFormat(durationFormat),
        humanized: HumanizeDuration(newSeconds * 1000)
    };
};

const computeTimestamps = (seconds: number, timeFormat: string) => {
    let newSeconds = seconds;
    if (isNaN(seconds)) {
        newSeconds = 0;
    } else if (seconds > maxTimestamp) {
        newSeconds = maxTimestamp;
    }
    let timestamp = DateTime.fromSeconds(newSeconds);
    return {
        timestamp: timestamp,
        unixTimestamp: newSeconds,
        isoTimestamp: timestamp.toISO(),
        RFC2822: timestamp.toRFC2822(),
        localeString: timestamp.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS),
        formattedString: timestamp.toFormat(timeFormat)
    };
};

export default Time;
