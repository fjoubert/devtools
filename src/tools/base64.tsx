import { ChangeEvent, useState } from 'react';
import { toByteArray, fromByteArray } from 'base64-js';
import { ErrorHandlerProps } from '../App';

const Base64 = ({ setError, clearError }: ErrorHandlerProps) => {

    const [value, setValue] = useState<string>("1234abcd");

    const handleEncodeClick = () => {
        try {
            setValue(fromByteArray(new TextEncoder().encode(value)));
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    const handleDecodeClick = () => {
        try {
            validateBase64(value);
            setValue(new TextDecoder('utf-8').decode(toByteArray(value)));
            clearError();
        } catch (e) {
            setError(e.message);
        }
    };

    function validateBase64(str: string) {
        const format = /^[a-zA-Z0-9+/_-]*={0,2}$/;
        const valid = format.test(str);
        if (!valid) {
            throw new Error('Invalid base64 string, it must match the pattern /^[a-zA-Z0-9+/_-]*={0,2}$/');
        }
    }

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
                <button onClick={handleEncodeClick}>Base64 Encode</button>
                <button onClick={handleDecodeClick}>Base64 Decode</button>
            </div>
        </>
    );
};

export default Base64;
