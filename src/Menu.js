import { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import UserInfoContext from "./contexts/UserInfoContext";

export default function Menu() {
    const {porcentageDone} = useContext(UserInfoContext);
    
    return (
        <MenuSection>
            <StyledLink to="/habitos"><h3>Hábitos</h3></StyledLink>
            <Progress>
                <StyledLink to="/hoje">
                    <CircularProgressbar
                        value={porcentageDone}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            textSize: "18px",
                            strokeLinecap: "round"
                        })}
                    />
                </StyledLink>
            </Progress>
            <StyledLink to="/historico"><h3>Histórico</h3></StyledLink>
        </MenuSection>
    );
}

const MenuSection = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 36px;

    h3 {
        font-size: 18px;
        line-height: 23px;
        color: #52b6ff;
    }

    .Link {
        text-decoration: none;
    }
`;

const Progress = styled.div`
    width: 91px;
    height: 91px;
    text-align: center;
    position: absolute;
    left: calc(50vw - 45.5px);
    bottom: 10px;

    .CircularProgressbar-text {
        transform: translate(-20px, 5px);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;