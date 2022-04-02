import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import UserInfoContext from "./../contexts/UserInfoContext";

export default function Habit({ habit }) {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    const SELECTION_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    function toggleHabit(id , done) {
        let promise;
        if (!done) {
            promise = axios.post(`${SELECTION_URL}/${id}/check`, null, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
        } else {
            promise = axios.post(`${SELECTION_URL}/${id}/uncheck`, null,{
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
        }
        promise.then(() => {
            setUserInfo({...userInfo});
        })
    }

    return (
        <HabitSection>
            <Description>
                <h3>{habit.name}</h3>
                <p>Sequência atual: <Checked checked={habit.done}>{habit.currentSequence} dias</Checked></p>
                <p>Seu recorde: <Matched difference={habit.currentSequence - habit.highestSequence}>{habit.highestSequence} dias</Matched></p>
            </Description>
            <SelectionBox checked={habit.done}>
                <ion-icon name="checkbox" onClick={() => toggleHabit(habit.id, habit.done)}></ion-icon>
            </SelectionBox>
        </HabitSection>
    );
}

const HabitSection = styled.div`
    width: 340px;
    height: 94px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 12px 13px; 
    margin-bottom: 10px;
`;

const Description = styled.div`
    h3 {
        font-size: 20px;
        line-height: 25px;
        color: #666;
        margin-bottom: 7px;
    }

    p {
        font-size: 13px;
        line-height: 16px;
        color: #666;
    }
`;

const Checked = styled.span`
    color: ${props => props.checked === true ? "#8fc549" : "#666"};
`;

const Matched = styled.span`
    color: ${props => props.difference === 0 ? "#8fc549" : "#666"};
`;

const SelectionBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ion-icon {
        width: 69px;
        height: 69px;
        color: ${props => props.checked === true ? "#8fc549" : "#e7e7e7"};
    }
`;