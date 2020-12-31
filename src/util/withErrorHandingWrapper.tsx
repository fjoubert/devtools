export interface ErrorHandlerProps {
    setError: Function;
    clearError: Function;
}

export function withErrorHandling<T>(fn: (...args: any[]) => T, { setError, clearError }: ErrorHandlerProps): (...args: any[]) => T {
    return function (...args: any[]) {
        let result: any;
        try {
            result = fn(...args);
            clearError();
        } catch (e) {
            setError(e.message);
        }
        return result;
    };
}

export default withErrorHandling;