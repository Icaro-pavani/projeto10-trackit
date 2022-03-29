import styled from "styled-components";
import { Link } from "react-router-dom";

import Trackit from "./assets/Trackit.svg";

export default function SignInScreen(){
    return (
        <SignIn>
            <img src={Trackit} alt="Trackit" />
            <FormSignIn>
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <input type="text" placeholder="nome" required />
                <input type="url" placeholder="foto" required />
                <button type="submit">Cadastrar</button>
            </FormSignIn>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </SignIn>
    );
}

const SignIn = styled.div`
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
        opacity: 0.5;
        padding-left: 11px;
        margin-bottom: 6px;
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
    }

    ::placeholder {
        color: #d5d5d5;
    }
`;