import { useState, useContext } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import UserInfoContext from "./contexts/UserInfoContext";

export default function AddHabitForm({setAddHabit, newHabit, setNewHabit}) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const HABIT_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const [disabled, setDisabled] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    function getNameNewHabit(event) {
        const {name, value} = event.target;
        setNewHabit(prevState => ({...prevState, [name]: value}));
    }

    function selectWeekday(index){
        if (newHabit.days.includes(index)){
            newHabit.days = newHabit.days.filter(day => day !== index);
            setNewHabit({...newHabit});
        } else {
            newHabit.days.push(index);
            setNewHabit({...newHabit, days: newHabit.days.sort()});
        }
    }

    function sendNewHabit() {
        setDisabled(true);
        const promise = axios.post(HABIT_URL, newHabit, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        promise.then(({data}) => {
            console.log(data);
            setNewHabit({ days: [] });
            setUserInfo({...userInfo});
            setDisabled(false);
            setAddHabit(false);
        });
        promise.catch(error => {
            alert(error.response.log);
            setDisabled(false);
        });
    }

    return (
        <HabitForm>
            <input type="text" name="name" disabled={disabled} onChange={getNameNewHabit} value={newHabit.name ? newHabit.name : ""} placeholder="nome do hábito" />
            <DaysButtons>
                {weekdays.map((day, index) => <DayButton key={index} disabled={disabled} onClick={() => selectWeekday(index)} selected={newHabit.days.includes(index)}>{day}</DayButton>)}
            </DaysButtons>
            <ConfirmationButtons>
                <CancelButton disabled={disabled} onClick={() => setAddHabit(false)}>Cancelar</CancelButton>
                <SaveButton disabled={disabled} onClick={sendNewHabit}>{disabled ? <ThreeDots color="#fff" height={30} width={30} /> : "Salvar"}</SaveButton>
            </ConfirmationButtons>
        </HabitForm>
    );
}

const HabitForm = styled.div`
    width: 340px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 18px 18px 15px;
    margin-top: 20px;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        line-height: 25px;
        border: 1px solid #d5d5d5;
        padding-left: 11px;
        margin-bottom: 8px;
        color: #afafaf;
        &::placeholder {
            color: #dbdbdb;
        }
        &:disabled {
            background-color: #f2f2f2;
        }
    }
`;

const DaysButtons = styled.div`
    width: 100%;
    display: flex;
`;

const DayButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    line-height: 25px;
    border: 1px solid #d5d5d5;    
    background-color: ${props => props.selected ? "#cfcfcf" : "#fff"};
    color: ${props => props.selected ? "#fff" : "#dbdbdb"};
    margin-right: 4px;
`;

const ConfirmationButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
    margin-top: 29px;
`;

const CancelButton = styled.button`
    width: 84px;
    border: none;
    background-color: #fff;
    color: #52b6ff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    line-height: 20px;
    margin-right: 20px;
    &:disabled {
        opacity: 0.7;
    }
`;

const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52b6ff;
    color: #fff;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    line-height: 20px;
    border-radius: 4.7px;
    &:disabled {
        opacity: 0.7;
    }
`;