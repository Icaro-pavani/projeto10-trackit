import styled from "styled-components";

import trash from "./assets/trash.svg";

export default function YourHabits({ habit }){
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <HabitDiv>
            <h3>{habit.name}</h3>
            <DaysButtons>
                {weekdays.map((day, index) => <DayButton key={index} disabled={true} selected={habit.days.includes(index)}>{day}</DayButton>)}
            </DaysButtons>
            <img src={trash} alt="trash can" />
        </HabitDiv>
    );
}

const HabitDiv = styled.div`
    width: 340px;
    height: 91px;
    background-color: #fff;
    position: relative;
    top: 0;
    left: 0;
    padding: 13px 15px;
    border-radius: 5px;
    margin-bottom: 10px;

    h3 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
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