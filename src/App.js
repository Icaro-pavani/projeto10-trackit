import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";

import LoginScreen from "./LoginScreen";
import SignInScreen from "./SignInScreen";
import Today from "./Today";
import Habits from "./Habits";
import Historic from "./Historic";

import UserInfoContext from "./contexts/UserInfoContext";

export default function App() {
    const [userInfo, setUserInfo] = useState({ name: "Icaro" });

    return (
        <>
            <GlobalStyle />
            <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/cadastro" element={<SignInScreen />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/historico" element={<Historic />} />
                    </Routes>
                </BrowserRouter>
            </UserInfoContext.Provider>
        </>
    )
}

