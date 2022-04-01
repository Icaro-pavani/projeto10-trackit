import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";

import Calendar from "react-calendar";
import Header from "./Header";
import Menu from "./Menu";
import UserInfoContext from "./contexts/UserInfoContext";


export default function Historic() {
    const [value, setValue] = useState(new Date());
    const [days, setDays] = useState({});

    const { userInfo } = useContext(UserInfoContext);

    useEffect(() => {
        let responseDays = {};
        const URL_CALENDARIO = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const promise = axios.get(URL_CALENDARIO, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        promise.then(({data}) => {
            console.log(data);
            data.forEach(day => {
                responseDays[day.day] = day.habits;
            });
            setDays({...responseDays});
        });
        promise.catch(error => console.log(error.response.data));
    },[setDays, userInfo]);

    function checkHabitsDone(date) {
        if (days[dayjs(date).format('DD/MM/YYYY')] && dayjs().format('DD/MM') !== dayjs(date).format('DD/MM')){
            const dayHabits = days[dayjs(date).format('DD/MM/YYYY')];
            console.log(dayHabits);
            const habitsDone = dayHabits.map(habit => habit.done);
            if (habitsDone.includes(false)){
                return (
                    <p className="incomplete">{dayjs(date).format('DD')}</p>
                );
            } else {
                return (
                    <p className="complete">{dayjs(date).format('DD')}</p>
                )
            }
        } else {
            return dayjs(date).format('DD');
        }
    }

    console.log(days);
    return (
        <HistoricSection>
            <Header />
            <HistoricHeader>
                <h2>Histórico</h2>
                {/* <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p> */}
            </HistoricHeader>
            <div>
                <Calendar className="calendar" 
                    formatDay={(locale, date) => checkHabitsDone(date)} 
                    calendarType="US" tileClassName={'standard'} 
                    // tileContent={checkHabitsDone}
                    onChange={setValue} 
                    value={value} 
                />
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

        .react-calendar__month-view__days {
            display: flex;
            padding-left: 2px;
            justify-content: space-between;
        }
    }

    .standard {
        /* max-width: 30px; */
        height: 50px;
        margin: 5px 0px;
        font-size: 15px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .complete {
        background-color: #8CC654;
        border-radius: 50%;
    }

    .incomplete {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #EA5766;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 50%;
    }

    .react-calendar__tile--active,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      border-radius: 50%;
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
