import { useState } from 'react';

const UrlEncodeDecode = () => {

    const [value, setValue] = useState<string>("");

    return (
        <>
            <textarea value={value} onChange={e => { setValue(e.target.value) }}></textarea>
            <div>
                <button onClick={() => { setValue(encodeURIComponent(value)) }}>Encode URL</button>
                <button onClick={() => { setValue(decodeURIComponent(value)) }}>Decode URL</button>
            </div>
        </>
    );
}

export default UrlEncodeDecode;
