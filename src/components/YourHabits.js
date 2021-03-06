import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import trash from "./../assets/trash.svg";
import UserInfoContext from "./../contexts/UserInfoContext";

export default function YourHabits({ habit }){
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    const HABIT_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
    function deleteHabit(id) {
        if (window.confirm("Você realmente deseja deletar este hábito?")){
            const promise = axios.delete(`${HABIT_URL}/${id}`, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            promise.then(() => setUserInfo({...userInfo}));
            promise.catch(error => console.log(error.response.data));
        }
    }

    return (
        <HabitDiv>
            <h3>{habit.name}</h3>
            <DaysSelected>
                {weekdays.map((day, index) => <Day key={index} selected={habit.days.includes(index)}>{day}</Day>)}
            </DaysSelected>
            <img src={trash} alt="trash can" onClick={() => deleteHabit(habit.id)} />
        </HabitDiv>
    );
}

const HabitDiv = styled.div`
    width: 340px;
    height: 91px;
    background-color: var(--menu-background-color);
    position: relative;
    top: 0;
    left: 0;
    padding: 13px 15px;
    border-radius: 5px;
    margin-bottom: 10px;

    h3 {
        font-size: 20px;
        line-height: 25px;
        color: var(--text-color);
        margin-bottom: 8px;
    }

    img {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`;

const DaysSelected = styled.div`
    width: 100%;
    display: flex;
`;

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    line-height: 25px;
    border: 1px solid var(--input-border-color);    
    background-color: ${props => props.selected ? "#cfcfcf" : "#fff"};
    color: ${props => props.selected ? "#fff" : "#dbdbdb"};
    margin-right: 4px;
`;