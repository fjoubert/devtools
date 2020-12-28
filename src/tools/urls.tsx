import { ChangeEvent, useState } from 'react';
import { ErrorHandlerProps } from '../App';

const Urls = ({ setError, clearError }: ErrorHandlerProps) => {

    const [value, setValue] = useState<string>("1234 abcd #");

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
                placeholder="Enter any text to encode/decode"
                data-testid="textareadTestId">
            </textarea>
            <div>
                <button onClick={() => { handleClick(encodeURIComponent); }}>Encode URL</button>
                <button onClick={() => { handleClick(decodeURIComponent); }}>Decode URL</button>
            </div>
        </>
    );
};

export default Urls;
