import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars } from "react-loader-spinner";

import Trackit from "./assets/Trackit.svg";

export default function LoginScreen(){
    const [submit, setSubmit] = useState(false);
    const [disabled, setDisabled] = useState(false);

    return (
        <Login>
            <img src={Trackit} alt="Trackit" />
            <FormLogin onSubmit={e => {
                e.preventDefault();
                setSubmit(true);
                setDisabled(true);
            }}>
                <input type="email" disabled={disabled} placeholder="email" required />
                <input type="password" disabled={disabled} placeholder="senha" required />
                <button type="submit" disabled={disabled}>{submit ? <Bars color="#fff" height={40} width={40} /> : "Entrar"}</button>
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