import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Habits() {
    return(
        <HabitsSection>
            <Header />
            <MyHabitsHeader>
                <h2>Meus hábitos</h2>
                <AddButton>
                    <ion-icon name="add-sharp"></ion-icon>
                </AddButton>
            </MyHabitsHeader>
            <Footer />
        </HabitsSection>
    );
}

const HabitsSection = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #f2f2f2;
    margin-top: 70px;
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

    ion-icon {
        color: #fff;
        font-size: 16px;
        --ionicon-stroke-width: 64px;
    }
`;