import { ChangeEvent, useState } from 'react';

const Urls = () => {

    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleClick = (action: Function) => {
        try {
            setValue(action(value));
            setError("");
        } catch (e) {
            setError(e.message);
        }
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <>
            <textarea value={value} onChange={handleTextareaChange} data-testid="textareadTestId"></textarea>
            <div>
                <button onClick={() => { handleClick(encodeURIComponent); }}>Encode URL</button>
                <button onClick={() => { handleClick(decodeURIComponent); }}>Decode URL</button>
            </div>
            <span className="error">{error}</span>
        </>
    );
};

export default Urls;
