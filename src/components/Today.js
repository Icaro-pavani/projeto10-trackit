import styled from "styled-components";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Menu from "./Menu";
import Habit from "./Habit";
import UserInfoContext from "./../contexts/UserInfoContext";
import calculatePorcentageDone from "./calculatePorcentageDone";

export default function Today() {
    const {userInfo, porcentageDone, setPorcentageDone} = useContext(UserInfoContext);
    const [todaysHabits, setTodaysHabits] = useState([]);

    const URL_TODAY = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    useEffect(() => {
        const promise = axios.get(URL_TODAY, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        promise.then(({data}) => {
            setTodaysHabits(data);
            const porcentageHabitsDone = calculatePorcentageDone(data);
            setPorcentageDone(porcentageHabitsDone);
        });
        promise.catch(error => console.log(error));
    },[userInfo, setPorcentageDone]);

    function weekday(day) {
        switch(day){
            case '0':
                return "Domingo";
            case '1':
                return "Segunda";
            case '2':
                return "Terça";
            case '3':
                return "Quarta";
            case '4':
                return "Quinta";
            case '5':
                return "Sexta";
            case '6':
                return "Sábado";
            default: 
                break;
        }
    }

    return(
        <TodaySection>
            <Header />
            <TodaysHeader>
                <h2>{weekday(dayjs().format('d'))}, {dayjs().format('DD/MM')}</h2>
                {porcentageDone !== '0' && todaysHabits.length > 0 ? <HabitsTrack color={"#8fc549"}>{porcentageDone}% dos hábitos concluídos</HabitsTrack> : <HabitsTrack color="#bababa">Nenhum hábito concluído ainda</HabitsTrack>}
            </TodaysHeader>
            <TodaysHabits>
                {todaysHabits.map((habit, index) => <Habit key={index} habit={habit}/>)}
            </TodaysHabits>
            <Menu />
        </TodaySection>
    );
}

const TodaySection = styled.main`
    width: 100%;
    margin-top: 70px;
    margin-bottom: 90px;
`;

const TodaysHeader = styled.div`
    width: 100%;
    padding: 28px 18px 0px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: var(--routes-title-color);
    }
`;

const HabitsTrack = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.color};
`;

const TodaysHabits = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 28px;
`;