import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";

import LoginScreen from "./LoginScreen";
import SignInScreen from "./SignInScreen";
import Habits from "./Habits";

import "./reset.css";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />}/>
                    <Route path="/cadastro" element={<SignInScreen />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

