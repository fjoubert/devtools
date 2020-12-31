import { useState } from 'react';
import { toByteArray, fromByteArray } from 'base64-js';
import withErrorHandling, { ErrorHandlerProps } from '../util/withErrorHandingWrapper';

const Base64 = (errorHandlerProps: ErrorHandlerProps) => {

    const [value, setValue] = useState<string>("1234abcd");

    const handleEncodeClick = withErrorHandling(() => {
        setValue(fromByteArray(new TextEncoder().encode(value)));
    }, errorHandlerProps);

    const handleDecodeClick = withErrorHandling(() => {
        validateBase64(value);
        setValue(new TextDecoder('utf-8').decode(toByteArray(value)));
    }, errorHandlerProps);

    function validateBase64(str: string) {
        const format = /^[a-zA-Z0-9+/_-]*={0,2}$/;
        const valid = format.test(str);
        if (!valid) {
            throw new Error('Invalid base64 string, it must match the pattern /^[a-zA-Z0-9+/_-]*={0,2}$/');
        }
    }

    return (
        <>
            <textarea
                autoFocus
                onFocus={(e) => e.target.select()}
                value={value} onChange={(e) => setValue(e.target.value)}
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
