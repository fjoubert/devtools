
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

    return (
        <>
            <textarea defaultValue={generateUuidv4(25).join('\n')}></textarea>
            <button onClick={generateUuidv4(25)}></button>
        </>
    );
}

export default Uuid4;
