import { ChangeEvent, useState } from 'react';
import withErrorHandling, { ErrorHandlerProps } from '../util/withErrorHandingWrapper';

const Uuid4 = (errorHandlerProps: ErrorHandlerProps) => {

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

    const handleInputChange = withErrorHandling((e: ChangeEvent<HTMLInputElement>) => {
        let newAmount = parseInt(e.target.value);
        if (isNaN(newAmount)) {
            newAmount = 1;
        }
        setAmountToGenerate(newAmount);
    }, errorHandlerProps);

    return (
        <>
            <textarea
                autoFocus
                onFocus={(e) => e.target.select()}
                value={value} onChange={(e) => setValue(e.target.value)}
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
