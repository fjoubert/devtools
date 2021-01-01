import { ChangeEvent, useEffect, useState } from 'react';
import { DateTime, Duration, DurationObjectUnits } from 'luxon';
import HumanizeDuration from 'humanize-duration';
import withErrorHandling, { ErrorHandlerProps } from '../util/withErrorHandingWrapper';

interface ITimestampProps {
    dateTime: DateTime,
    unixTimestamp?: number,
    isoTimestamp?: string,
    RFC2822?: string,
    formattedString: string,
}

interface IDurationProps {
    values: Duration,
    formattedString: string,
    humanized: string,
}

const maxTimestamp = 999999999999;

const defaultDuration = Duration.fromObject(
    {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 300,
        milliseconds: 0,
    }
);

const Time = (errorHandlerProps: ErrorHandlerProps) => {

    const [timeFormat, setTimeFormat] = useState<string>("yyyy-MM-dd HH:mm:ss");
    const [durationFormat, setDurationFormat] = useState<string>("h:mm:ss");

    const [timestamp, setTimestamp] = useState<ITimestampProps>({
        dateTime: DateTime.utc(),
        unixTimestamp: 0,
        isoTimestamp: '',
        RFC2822: '',
        formattedString: '',
    });

    const [duration, setDuration] = useState<IDurationProps>({
        values: defaultDuration,
        formattedString: '',
        humanized: '',
    });

    useEffect(() => {
        setTimestamp(computeTimestamp(DateTime.utc(), timeFormat));
        setDuration(computeDuration(defaultDuration, durationFormat));
    }, [durationFormat, timeFormat]);

    const setNow = () => {
        setTimestamp(computeTimestamp(DateTime.utc(), timeFormat));
    };

    const setTimestampFromDateTime = withErrorHandling((dateTime: DateTime) => {
        if (!dateTime.isValid) {
            throw new Error(dateTime.invalidExplanation!);
        }
        setTimestamp(computeTimestamp(dateTime, timeFormat));
    }, errorHandlerProps);

    const setDurationFromDurationObject = withErrorHandling((durationSegment: DurationObjectUnits) => {
        duration.values.set(durationSegment);
        setDuration(computeDuration(duration.values, durationFormat));
    }, errorHandlerProps);

    const handleFocus = (e: ChangeEvent<HTMLInputElement>) => e.target.select();
    const handleTextareaFocus = (e: ChangeEvent<HTMLTextAreaElement>) => e.target.select();

    return (
        <div className="timeTool">
            <span className="divider">Time<button onClick={setNow}>Now</button></span>
            <div className="timeRow">
                <label>Unix (seconds)</label>
                <input
                    autoFocus
                    type="text"
                    min="0"
                    max={maxTimestamp}
                    value={timestamp.unixTimestamp}
                    onChange={(e) => { setTimestampFromDateTime(DateTime.fromSeconds(parseInt(e.target.value))); }}
                />
            </div>
            <div className="timeRow">
                <label>Format</label>
                <a href="https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens" target="_blank" rel="noreferrer">?</a>
                <input
                    type="text"
                    value={timeFormat}
                    onChange={(e) => setTimeFormat(e.target.value)}
                />
            </div>
            <div className="timeRow">
                <label>Formatted String</label>
                <input
                    type="text"
                    value={timestamp.formattedString}
                    onChange={(e) => { setTimestampFromDateTime(DateTime.fromFormat(e.target.value, timeFormat)); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>ISO 8601</label>
                <input
                    type="text"
                    value={timestamp.isoTimestamp}
                    onChange={(e) => { setTimestampFromDateTime(DateTime.fromISO(e.target.value)); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>RFC2822</label>
                <input
                    type="text"
                    value={timestamp.RFC2822}
                    onChange={(e) => { setTimestampFromDateTime(DateTime.fromRFC2822(e.target.value)); }}
                    onFocus={handleFocus}
                />
            </div>
            <span className="divider">Duration</span>
            <div className="timeRow">
                <label>Years</label>
                <input
                    type="number"
                    value={duration.values.years}
                    onChange={(e) => { setDurationFromDurationObject({ years: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Months</label>
                <input
                    type="number"
                    value={duration.values.months}
                    onChange={(e) => { setDurationFromDurationObject({ months: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Weeks</label>
                <input
                    type="number"
                    value={duration.values.weeks}
                    onChange={(e) => { setDurationFromDurationObject({ weeks: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Days</label>
                <input
                    type="number"
                    value={duration.values.days}
                    onChange={(e) => { setDurationFromDurationObject({ days: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Hours</label>
                <input
                    type="number"
                    value={duration.values.hours}
                    onChange={(e) => { setDurationFromDurationObject({ hours: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Minutes</label>
                <input
                    type="number"
                    value={duration.values.minutes}
                    onChange={(e) => { setDurationFromDurationObject({ minutes: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Seconds</label>
                <input
                    type="number"
                    value={duration.values.seconds}
                    onChange={(e) => { setDurationFromDurationObject({ seconds: parseInt(e.target.value) }); }}
                    onFocus={handleFocus}
                />
            </div>
            <div className="timeRow">
                <label>Format</label>
                <a href="https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens" target="_blank" rel="noreferrer">?</a>
                <input
                    type="text"
                    value={durationFormat}
                    onChange={(e) => setDurationFormat(e.target.value)}
                />
            </div>
            <div className="timeRow">
                <label>Formatted String</label>
                <input
                    type="text"
                    defaultValue={duration.formattedString}
                    onFocus={handleFocus}
                />
            </div>

            <label className="divider">Humanized</label>
            <textarea
                id="inputHumanized"
                defaultValue={duration.humanized}
                onFocus={handleTextareaFocus}
            />
        </div>
    );
};

export const computeDuration = (duration: Duration, durationFormat: string): IDurationProps => {
    return {
        values: duration,
        formattedString: duration.toFormat(durationFormat),
        humanized: HumanizeDuration(duration.as('milliseconds'))
    };
};

export const computeTimestamp = (dateTime: DateTime, timeFormat: string): ITimestampProps => {

    return {
        dateTime: dateTime,
        unixTimestamp: dateTime.toSeconds(),
        isoTimestamp: dateTime.toISO(),
        RFC2822: dateTime.toRFC2822(),
        formattedString: dateTime.toFormat(timeFormat)
    };
};

export default Time;
