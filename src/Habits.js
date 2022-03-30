import { useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Menu from "./Menu";
import AddHabitForm from "./AddHabitForm";

export default function Habits() {
    const [habits, setHabits] = useState({});
    const [addHabit, setAddHabit] = useState(false);
    const [newHabit, setNewHabit] = useState({days: []});

    console.log(newHabit.days);

    return(
        <HabitsSection>
            <Header />
            <MyHabitsHeader>
                <h2>Meus hábitos</h2>
                <AddButton onClick={() => setAddHabit(true)}>
                    <ion-icon name="add-sharp"></ion-icon>
                </AddButton>
            </MyHabitsHeader>
            {addHabit ? <AddHabitForm setAddHabit={setAddHabit} newHabit={newHabit} setNewHabit={setNewHabit} /> : <></>}

            {Object.keys(habits).length > 0 ? <></> : 
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            <Menu />
        </HabitsSection>
    );
}

const HabitsSection = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #f2f2f2;
    margin-top: 70px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
        padding: 0 18px;
        margin-top: 30px;
    }
`;

const MyHabitsHeader = styled.div`
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