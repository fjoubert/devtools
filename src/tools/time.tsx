import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { ErrorHandlerProps } from '../App';
import { DateTime, Duration } from 'luxon';
import HumanizeDuration from 'humanize-duration';

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
    humanized: string;
}

const Time = ({ setError, clearError }: ErrorHandlerProps) => {

    const [timestamps, setTimestamps] = useState<ITimestampsProps>({
        timestamp: DateTime.utc(),
        unixTimestamp: 0,
        isoTimestamp: '',
        RFC2822: '',
        localeString: '',
        formattedString: '',
    });
    const [durations, setDurations] = useState<IDurationsProps>({
        seconds: 60000,
        formattedString: '',
        humanized: ''
    });
    const [timeFormat, setTimeFormat] = useState<string>("yyyy-MM-dd HH:mm:ss.SSS");
    const [durationFormat, setDurationFormat] = useState<string>("h:mm:ss");

    const computeTimestamps = useCallback((unixTimestamp: number) => {
        let timestamp = DateTime.fromSeconds(unixTimestamp);
        setTimestamps({
            timestamp: timestamp,
            unixTimestamp: unixTimestamp,
            isoTimestamp: timestamp.toISO(),
            RFC2822: timestamp.toRFC2822(),
            localeString: timestamp.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS),
            formattedString: timestamp.toFormat(timeFormat)
        });
    }, [timeFormat]);

    const computeDurations = useCallback((seconds: number) => {
        setDurations({
            seconds: seconds,
            formattedString: Duration.fromMillis(seconds * 1000).toFormat(durationFormat),
            humanized: HumanizeDuration(seconds * 1000)
        });
    }, [durationFormat]);

    const setNow = () => {
        computeTimestamps(DateTime.utc().toSeconds());
    };

    useEffect(() => {
        computeTimestamps(DateTime.utc().toSeconds());
        computeDurations(60000);
    }, [computeTimestamps, computeDurations]);

    const handleUnixInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            computeTimestamps(parseInt(e.target.value));
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    const handleTimeISOInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            let newDateTime = DateTime.fromISO(e.target.value);
            if (!newDateTime.isValid) {
                setTimestamps({
                    ...timestamps,
                    isoTimestamp: e.target.value
                });
                throw new Error(newDateTime.invalidExplanation!);
            }
            computeTimestamps(newDateTime.toSeconds());
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    const handleRFC2822InputChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            let newDateTime = DateTime.fromRFC2822(e.target.value);
            if (!newDateTime.isValid) {
                setTimestamps({
                    ...timestamps,
                    RFC2822: e.target.value
                });
                throw new Error(newDateTime.invalidExplanation!);
            }
            computeTimestamps(newDateTime.toSeconds());
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    const handleTimeFormattedInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            let newDateTime = DateTime.fromFormat(e.target.value, timeFormat);
            if (!newDateTime.isValid) {
                setTimestamps({
                    ...timestamps,
                    formattedString: e.target.value
                });
                throw new Error(newDateTime.invalidExplanation!);
            }
            computeTimestamps(newDateTime.toSeconds());
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    const handleDurationSecondsInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        try {
            computeDurations(parseInt(e.target.value));
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

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
                    value={timestamps.unixTimestamp}
                    onChange={handleUnixInputChange}
                    onFocus={handleFocus} />
            </div>
            <div className="timeRow">
                <label htmlFor="inputFormat">Format</label>
                <a href="https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens" target="_blank" rel="noreferrer">?</a>
                <input
                    id="inputFormat"
                    type="text"
                    value={timeFormat}
                    onChange={(e) => setTimeFormat(e.target.value)}
                    onFocus={handleFocus}
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
                    value={durations.seconds}
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
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label htmlFor="inputFormattedDurationString">Formatted String</label>
                <input
                    id="inputFormattedDurationString"
                    type="text"
                    defaultValue={durations.formattedString}
                    onFocus={handleFocus}
                />
            </div>

            <label className="divider" htmlFor="inputHumanized">Humanized</label>
            <textarea
                id="inputHumanized"
                defaultValue={durations.humanized}
                onFocus={handleTextareaFocus}
            />
        </div>
    );
};

export default Time;
