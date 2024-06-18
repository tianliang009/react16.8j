import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate('/data')
    }
    return (
        <button onClick={login}>登陆</button>
    );
}
export default Login;
