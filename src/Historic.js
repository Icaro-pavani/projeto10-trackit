import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import Calendar from "react-calendar";
import Header from "./Header";
import Menu from "./Menu";


export default function Historic() {
    const [value, onChange] = useState(new Date());
    return (
        <HistoricSection>
            <Header />
            <HistoricHeader>
                <h2>Histórico</h2>
                {/* <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p> */}
            </HistoricHeader>
            <div>
                <Calendar className="calendar" formatDay={(locale, date) => dayjs(date).format('DD')} calendarType="US" tileClassName={'standard'} onChange={onChange} value={value} />
            </div>
            <Menu />
        </HistoricSection>
    );
}

const HistoricSection = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    margin-top: 70px;

    .calendar {
        width: 335px;
        height: 402px;
        border: none;
        border-radius: 10px;
        background-color: #fff;
        font-size: 17px;
    }

    .standard {
        width: 40px;
        height: 47px;
        margin: 5px 0px;
        font-size: 15px;
        font-weight: bold;
    }

    .react-calendar__tile--active,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      border-radius: 50%
}
`;

const HistoricHeader = styled.div`
    width: 100%;
    padding: 28px 18px 0px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
        margin-bottom: 11px;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
        margin-top: 17px;
    }
`;
