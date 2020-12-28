import { ChangeEvent, useState } from 'react';

const Uuid4 = () => {

    const generateUuidv4 = (n: number) => {
        return [...Array(n)].map(() => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                // eslint-disable-next-line no-mixed-operators
                let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        });
    };

    const [amountToGenerate, setAmountToGenerate] = useState<number>(25);
    const [value, setValue] = useState<string>(generateUuidv4(amountToGenerate).join('\n') + '\n');

    const handleClick = () => {
        setValue(generateUuidv4(amountToGenerate).join('\n') + '\n');
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmountToGenerate(parseInt(e.target.value));
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
                placeholder="Click Generate UUIDs"
                data-testid="textareadTestId">
            </textarea>
            <div>
                <input data-testid="inputTestId" type="number" value={amountToGenerate} min="1" max="10000" onChange={handleInputChange} />
                <button onClick={handleClick}>Generate UUIDs</button>
            </div>
        </>
    );
};

export default Uuid4;
