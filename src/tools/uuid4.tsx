import { useState } from 'react';

const Uuid4 = () => {

    const generateUuidv4 = (n: number) => {
        return [...Array(n)].map(() => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                // eslint-disable-next-line no-mixed-operators
                let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        });
    }

    const [amountToGenerate, setAmountToGenerate] = useState<number>(25);
    const [value, setValue] = useState<string>(generateUuidv4(amountToGenerate).join('\n'));

    return (
        <>
            <textarea data-testid="textareadTestId" value={value} onChange={e => { setValue(e.target.value) }}></textarea>
            <div>
                <input data-testid="inputTestId" type="number" value={amountToGenerate} min="1" max="10000" onChange={e => { setAmountToGenerate(parseInt(e.target.value)) }} />
                <button onClick={() => setValue(generateUuidv4(amountToGenerate).join('\n'))}>Generate UUIDs</button>
            </div>
        </>
    );
}

export default Uuid4;
