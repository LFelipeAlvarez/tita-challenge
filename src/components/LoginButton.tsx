import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { logIn } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { GooglePayload } from '../types';

const LoginButton = () => {

    const dispatch = useDispatch();
    const handleSuccess = (credentialResponse: CredentialResponse) => {
        const { credential } = credentialResponse;
        if (credential) {
            const { name, picture } = jwtDecode(credential) as GooglePayload;
            dispatch(logIn({ name, picture }));
        }
    };

    const handleFailure = () => {
        console.log('Login Failed');
    };

    return <GoogleLogin width='40px' theme='filled_blue' onSuccess={handleSuccess} onError={handleFailure} />

};

export default LoginButton;