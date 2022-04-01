import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import Trackit from "./assets/Trackit.svg";
import UserInfoContext from "./contexts/UserInfoContext";

export default function LoginScreen() {
    const [disabled, setDisabled] = useState(false);
    const [loginInfo, setLoginInfo] = useState({});

    const { userInfo ,setUserInfo } = useContext(UserInfoContext);

    let loginReturnObject = localStorage.getItem("loginInfo");

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();


    useEffect(() => {
        if (userInfo.token) {
            navigate("/hoje");
        }
    }, [ userInfo, navigate]);

    function updateLoginInfo(event) {
        const { name, value } = event.target;
        setLoginInfo(prevState => ({ ...prevState, [name]: value }));
    }

    function submitLoginInfo(event) {
        event.preventDefault();
        const promise = axios.post(URL, loginInfo);
        setDisabled(true);

        promise.then(({ data }) => {
            loginReturnObject = JSON.stringify(data);
            // console.log(loginReturnObject);
            localStorage.setItem("loginInfo", loginReturnObject);
            setUserInfo(data);
            navigate("/hoje");
        });

        promise.catch(error => {
            console.log(error.response.data);
            alert(error.response.data.message);
            setDisabled(false);
        })
    }

    return (
        <Login>
            <img src={Trackit} alt="Trackit" />
            <FormLogin onSubmit={submitLoginInfo}>
                <input type="email" name="email" onChange={updateLoginInfo} disabled={disabled} placeholder="email" required />
                <input type="password" name="password" onChange={updateLoginInfo} disabled={disabled} placeholder="senha" required />
                <button type="submit" disabled={disabled}>{disabled ? <ThreeDots color="#fff" height={40} width={40} /> : "Entrar"}</button>
            </FormLogin>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Login>
    );
}

const Login = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 68px;

    img {
        width: 180px;
        height: 178px;
        margin-bottom: 32px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        color: #52b6ff;
        text-decoration: underline;
    }
`;

const FormLogin = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        line-height: 25px;
        border: 1px solid #d5d5d5;
        padding-left: 11px;
        margin-bottom: 6px;
        color: #afafaf;
        &::placeholder {
            color: #dbdbdb;
        }
        &:disabled {
            background-color: #f2f2f2;
        }
    }

    button {
        width: 303px;
        height: 45px;
        color: #fff;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        line-height: 26px;
        background-color: #52b6ff;
        border: none;
        border-radius: 4.7px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:disabled {
            opacity: 0.7;
        }
    }   
`;