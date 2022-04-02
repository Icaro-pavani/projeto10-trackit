import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "./Header";
import Menu from "./Menu";
import AddHabitForm from "./AddHabitForm";
import YourHabits from "./YourHabits";
import UserInfoContext from "./contexts/UserInfoContext";

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [addHabit, setAddHabit] = useState(false);
    const [newHabit, setNewHabit] = useState({ days: [] });

    const HABIT_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const { userInfo } = useContext(UserInfoContext);

    useEffect(() => {
        const promise = axios.get(HABIT_URL, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        promise.then(({ data }) => {
            setHabits(data);
        });
        promise.catch(error => console.log(error.response.data));
    }, [userInfo]);

    return (
        <HabitsSection>
            <Header />
            <MyHabitsHeader>
                <h2>Meus hábitos</h2>
                <AddButton onClick={() => setAddHabit(true)}>
                    <ion-icon name="add-sharp"></ion-icon>
                </AddButton>
            </MyHabitsHeader>
            {addHabit ? <AddHabitForm setAddHabit={setAddHabit} newHabit={newHabit} setNewHabit={setNewHabit} /> : <></>}
            <HabitList>
                {habits.length > 0 ? (habits.map((habit, index) => <YourHabits key={index} habit={habit} />)) :
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </HabitList>
            <Menu />
        </HabitsSection>
    );
}

const HabitsSection = styled.main`
    width: 100%;
    max-height: calc(100vh - 160px);
    overflow: scroll;
    background-color: #f2f2f2;
    margin-top: 70px;
`;

const MyHabitsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 18px 0px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126ba5;
    }
`;

const AddButton = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4.7px;
    cursor: pointer;

    ion-icon {
        color: #fff;
        font-size: 16px;
        --ionicon-stroke-width: 64px;
    }
`;

const HabitList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
        padding: 0 18px;
        margin-top: 10px;
    }
`;