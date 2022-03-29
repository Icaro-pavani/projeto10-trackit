import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";

import LoginScreen from "./LoginScreen";
import SignInScreen from "./SignInScreen";

import "./reset.css";
// import "./style.css";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />}/>
                    <Route path="/cadastro" element={<SignInScreen />} />          
                </Routes>
            </BrowserRouter>
        </>
    )
}

