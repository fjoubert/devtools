import { ChangeEvent, useState } from 'react';
import { ErrorHandlerProps } from '../App';

export const prettify = (json: string) => {
    return JSON.stringify(JSON.parse(json), null, 2);
};

export const minify = (json: string) => {
    return JSON.stringify(JSON.parse(json));
};

export const escape = (json: string) => {
    JSON.parse(json); // validate before escaping
    return json.replace(/[\\]/g, '\\\\')
        .replace(/[\/]/g, '\\/') // eslint-disable-line no-useless-escape
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t')
        .replace(/[\"]/g, '\\"'); // eslint-disable-line no-useless-escape
};

export const unescape = (json: string) => {
    let unescaped = json
        .replace(/\\/g, '\\')
        .replace(/\//g, '/')
        .replace(/\\b/g, '\b')
        .replace(/\\f/g, '\f')
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t')
        .replace(/\\"/g, '"'); // eslint-disable-line no-useless-escape
    return JSON.stringify(JSON.parse(unescaped));
};

const Json = ({ setError, clearError }: ErrorHandlerProps) => {

    const [value, setValue] = useState<string>(JSON.stringify({ abc: 123, def: 456, ghi: { jkl: 789 } }, null, 2));

    const handleClick = (action: Function) => {
        try {
            setValue(action(value));
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => e.target.select();

    return (
        <>
            <textarea
                autoFocus
                onFocus={handleFocus}
                value={value} onChange={handleTextareaChange}
                placeholder="Enter a JSON string and click a button"
                data-testid="textareadTestId">
            </textarea>
            <div>
                <button onClick={() => { handleClick(prettify); }}>Prettify</button>
                <button onClick={() => { handleClick(minify); }}>Minify</button>
                <button onClick={() => { handleClick(escape); }}>Escape</button>
                <button onClick={() => { handleClick(unescape); }}>Unescape</button>
            </div>
        </>
    );
};

export default Json;
