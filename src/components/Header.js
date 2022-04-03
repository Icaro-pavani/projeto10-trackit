import { useContext } from "react";
import styled from "styled-components";

import UserInfoContext from "./../contexts/UserInfoContext";

export default function Header() {
    const {userInfo} = useContext(UserInfoContext);

    return (
        <HeaderSection>
            <h1>TrackIt</h1>
            <img src={userInfo.image} alt="logo" />
        </HeaderSection>
    );
}

const HeaderSection = styled.header`
    width: 100%;
    display: flex;
    font-family: 'Playball', cursive; 
    height: 70px;
    justify-content: space-between;
    align-items:  center;
    background-color: var(--header-background-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    h1 {
        font-size: 39px;
        line-height: 49px;
        color: var(--menu-background-color);
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;