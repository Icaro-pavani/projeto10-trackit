import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer(){
    return (
        <FooterSection>
            <h3>Hábitos</h3>
            <Progress>
                <CircularProgressbar
                  value={60}
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
            </Progress>
            <h3>Histórico</h3>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
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
`;

const Progress = styled.div`
    width: 91px;
    height: 91px;
    text-align: center;
    position: absolute;
    left: calc(50vw - 45.5px);
    bottom: 10px;

    .CircularProgressbar-text {
        text-align: center;
        transform: translate(-20px, 5px);
    }
`;