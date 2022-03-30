import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

export default function Today() {
    return(
        <TodaySection>
            <Header />
            <TodaysHeader>
                <h2>Meus hábitos</h2>
            </TodaysHeader>
            <Menu />
        </TodaySection>
    );
}

const TodaySection = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #f2f2f2;
    margin-top: 70px;
`;

const TodaysHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 18px 0px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
    }
`;