import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

export default function Historic() {
    return(
        <HistoricSection>
            <Header />
            <HistoricHeader>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricHeader>
            <Menu />
        </HistoricSection>
    );
}

const HistoricSection = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #f2f2f2;
    margin-top: 70px;
`;

const HistoricHeader = styled.div`
    width: 100%;
    padding: 28px 18px 0px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
        margin-top: 17px;
    }
`;