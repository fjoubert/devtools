import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import withErrorHandling, { ErrorHandlerProps } from '../util/withErrorHandingWrapper';

const Jwt = (errorHandlerProps: ErrorHandlerProps) => {

    const [jwtValue, setJwtValue] = useState<string>('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    const [decodedHeader, setDecodedHeader] = useState<string>('');
    const [decodedBody, setDecodedBody] = useState<string>('');

    const decodeJwt = withErrorHandling((jwt: string) => {
        setDecodedBody(JSON.stringify(jwt_decode(jwt), null, 2));
        setDecodedHeader(JSON.stringify(jwt_decode(jwt, { header: true }), null, 2));
    }, errorHandlerProps);

    useEffect(() => {
        decodeJwt(jwtValue);
    }, [decodeJwt, jwtValue]);

    return (
        <div className="jwtTool">
            <label>Token</label>
            <textarea
                autoFocus
                className="smallerTextarea"
                onFocus={(e) => e.target.select()}
                value={jwtValue} onChange={(e) => setJwtValue(e.target.value)}
                placeholder="Enter a JWT token to decode">
            </textarea>
            <label>Header</label>
            <textarea
                className="smallerTextarea"
                onFocus={(e) => e.target.select()}
                value={decodedHeader} onChange={(e) => setDecodedHeader(e.target.value)}
                placeholder="The decoded header goes here">
            </textarea>
            <label>Body</label>
            <textarea
                className="mediumTextarea"
                onFocus={(e) => e.target.select()}
                value={decodedBody} onChange={(e) => setDecodedBody(e.target.value)}
                placeholder="The decoded body goes here">
            </textarea>
        </div>
    );
};

export default Jwt;
