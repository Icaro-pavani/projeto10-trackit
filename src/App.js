import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";

import LoginScreen from "./LoginScreen";
import SignInScreen from "./SignInScreen";
import Today from "./Today";
import Habits from "./Habits";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginScreen />}/>
                    <Route path="/cadastro" element={<SignInScreen />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

