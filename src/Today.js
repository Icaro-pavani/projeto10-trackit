import styled from "styled-components";
import dayjs from "dayjs";
import { useContext } from "react";

import Header from "./Header";
import Menu from "./Menu";
import Habit from "./Habit";
import UserInfoContext from "./contexts/UserInfoContext";

export default function Today() {
    const {userInfo} = useContext(UserInfoContext);

    console.log(userInfo);
    const today = [
        {
            "id": 3,
            "name": "Acordar",
            "done": true,
            "currentSequence": 1,
            "highestSequence": 1
        },
        {
            "id": 5,
            "name": "Acordar",
            "done": false,
            "currentSequence": 1,
            "highestSequence": 2
        }
    ];

    const isDone = today.map(habit => habit.done);

    function calculatePorcentageDone(){
        const done = isDone.filter(habit => habit === true);
        return (done.length/isDone.length * 100).toFixed(2);
    }

    console.log(isDone);

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
                {isDone.includes(true) ? <HabitsTrack color={"#8fc549"}>{calculatePorcentageDone()}% dos hábitos concluídos</HabitsTrack> : <HabitsTrack color="#bababa">Nenhum hábito concluído ainda</HabitsTrack>}
            </TodaysHeader>
            <TodaysHabits>
                {today.map((habit, index) => <Habit key={index} habit={habit}/>)}
            </TodaysHabits>
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
    padding: 28px 18px 0px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
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