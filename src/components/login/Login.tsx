import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ISuccessfulLoginData from "../../models/ISuccessfulLoginData";
import { ActionType } from "../../redux/action-type";
import jwt_decode from 'jwt-decode';
import './Login.css';



function Login() {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate();
    let dispatch = useDispatch();

    async function onButtonClicked(): Promise<void> {
        try {
            const response = await axios.post("http://localhost:8080/users/login", { userName, password });
            let token = response.data;
            let decodedToken: any = jwt_decode(token);
            let strSuccessfulLoginResponse: string = decodedToken.sub;
            let successfulLoginResponse: ISuccessfulLoginData = JSON.parse(strSuccessfulLoginResponse);
            dispatch({ type: ActionType.LogInData, payload: { logInData: successfulLoginResponse } });
            console.log("decoded: ", successfulLoginResponse)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigate("/users")
        }
        catch (e: any) {
            console.error(e);
            if (e.response?.data?.error?.massage) {
                alert(e.response.data.error.massage)
            } else {
                alert("Login invalid,try later")
            }
        }
    }

    return (
        <div className='login-container' >
            <div className='login'>
                <div className='login-content'>
                    <div className='login-header'>
                        <h2>Login</h2>
                    </div>
                    <div className='form-text-box'>
                        <input id='filling-box' type="text" placeholder='user name' onChange={event => setUserName(event.target.value)} />
                    </div>
                    <div className='form-text-box'>
                        <input id='filling-box' type="text" placeholder='password' onChange={event => setPassword(event.target.value)} />
                    </div>
                    <div className='button'>
                        <input id='login-button' type="button" value="login" onClick={onButtonClicked} /><br />
                    </div>

                    <div className='link-to-registration'>
                        <p>don't have an account?
                            <a id='sign-up' href="http://localhost:3000/register">sign up</a></p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Login;



