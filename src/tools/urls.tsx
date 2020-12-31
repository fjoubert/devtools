import { useState } from 'react';
import withErrorHandling, { ErrorHandlerProps } from '../util/withErrorHandingWrapper';

const Urls = (errorHandlerProps: ErrorHandlerProps) => {

    const [value, setValue] = useState<string>("1234 abcd #");

    const handleClick = withErrorHandling((action: Function) => {
        setValue(action(value));
    }, errorHandlerProps);

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
                <button onClick={() => { handleClick(encodeURIComponent); }}>Encode URL</button>
                <button onClick={() => { handleClick(decodeURIComponent); }}>Decode URL</button>
            </div>
        </>
    );
};

export default Urls;
