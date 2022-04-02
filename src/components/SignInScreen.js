import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import Trackit from "./../assets/Trackit.svg";

export default function SignInScreen(){
    const [disabled, setDisabled] = useState(false);
    const [signInInfo, setSignInInfo] = useState({});
    const navigate = useNavigate();

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    function updateSignInState(event) {
        const {value, name} = event.target;
        setSignInInfo(prevState => ({...prevState, [name]: value}));
    }

    function sendSignInInfo(event){
        event.preventDefault();
        setDisabled(true);
        const promise = axios.post(URL, signInInfo);

        promise.then(({data}) => {
            console.log(data);
            navigate("/");         
        })

        promise.catch(error => {
            console.log(error.response.data);
            alert(error.response.data.message);
            setDisabled(false);
        })
    }

    return (
        <SignIn>
            <img src={Trackit} alt="Trackit" />
            <FormSignIn onSubmit={sendSignInInfo}>
                <input type="email" name="email" onChange={updateSignInState} disabled={disabled} placeholder="email" required />
                <input type="password" name="password" onChange={updateSignInState} disabled={disabled} placeholder="senha" required />
                <input type="text" name="name" onChange={updateSignInState} disabled={disabled} placeholder="nome" required />
                <input type="url" name="image" onChange={updateSignInState} disabled={disabled} placeholder="foto" required />
                <button type="submit" disabled={disabled}>{disabled ? <ThreeDots color="#fff" height={40} width={40} /> : "Cadastrar"}</button>
            </FormSignIn>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </SignIn>
    );
}

const SignIn = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* margin-top: 68px; */

    img {
        width: 180px;
        height: 178px;
        margin-bottom: 32px;
        margin-top: 68px
    }

    p {
        font-size: 14px;
        line-height: 17px;
        color: #52b6ff;
        text-decoration: underline;
    }
`;

const FormSignIn = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 303px;
        height: 45px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        line-height: 25px;
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

    ::placeholder {
        color: #d5d5d5;
    }
`;