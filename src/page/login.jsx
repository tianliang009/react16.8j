import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Input, Button } from '@douyinfe/semi-ui';
import { getUsers, getLogin, loginSelect } from '../utils/userHelper';
const Login = () => {
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();

    // const fetchData = async () => {
    //     // const temp = await getUsers();
    //     const temp = await accountLogin();
    //     console.log(temp)
    //     return
    // }
    // fetchData()

    const navigate = useNavigate();
    const loginOpe = async() => {
        let temp = {
            account: account,
            password: password
        }
        if(( await loginSelect(temp) ).length > 0 ){
            navigate('/data')
        } else {
            console.log('错误')
        }
    }
    return (
        <div className='login_box'>
            <div className='login_con'>
                <p className='tit'>登 陆</p>
                <Input placeholder='请输入账号' onChange={(e) => {setAccount(e)}} />
                <Input placeholder='请输入密码' onChange={(e) => {setPassword(e)}} mode="password" />
                <div>
                    <Button onClick={loginOpe} theme='solid' type='primary' style={{ marginRight: 8 }} >登陆</Button>
                    <Button theme='solid' type='tertiary' style={{ marginRight: 8 }}>注册</Button>
                </div>
            </div>
        </div>
    );
}
export default Login;
