import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import axios from "axios";

import Calendar from "react-calendar";
import Header from "./Header";
import Menu from "./Menu";
import UserInfoContext from "./../contexts/UserInfoContext";
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5";


export default function Historic() {
    const [value, setValue] = useState(new Date());
    const [days, setDays] = useState({});
    const [listHabits, setListHabits] = useState([]);

    const { userInfo } = useContext(UserInfoContext);

    useEffect(() => {
        let responseDays = {};
        const URL_CALENDARIO = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
        const promise = axios.get(URL_CALENDARIO, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        promise.then(({ data }) => {
            data.forEach(day => {
                responseDays[day.day] = day.habits;
            });
            setDays({ ...responseDays });
        });
        promise.catch(error => console.log(error.response.data));
    }, [setDays, userInfo]);

    function checkHabitsDone(date) {
        if (days[dayjs(date).format('DD/MM/YYYY')] && dayjs().format('DD/MM') !== dayjs(date).format('DD/MM')) {
            const dayHabits = days[dayjs(date).format('DD/MM/YYYY')];
            const habitsDone = dayHabits.map(habit => habit.done);
            if (habitsDone.includes(false)) {
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

    return (
        <HistoricSection>
            <Header />
            <HistoricHeader>
                <h2>Histórico</h2>
                {/* <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p> */}
            </HistoricHeader>
            <CalendarSection>
                <Calendar className="calendar"
                    formatDay={(locale, date) => checkHabitsDone(date)}
                    calendarType="US" tileClassName={'standard'}
                    onClickDay={(value, event) => days[dayjs(value).format('DD/MM/YYYY')] ? setListHabits([...days[dayjs(value).format('DD/MM/YYYY')]]) : setListHabits([])}
                    // tileDisabled={({activeStartDate, date, view }) => days[dayjs(date).format('DD/MM/YYYY')] ? false : true}
                    onChange={setValue}
                    value={value}
                />
            </CalendarSection>
            {listHabits.length > 0 ? (
                <HabitsList>
                    <h3>Hábitos do dia {dayjs(value).format('DD/MM')}</h3>
                    {listHabits.map((habit, index) => (
                        <HabitElement key={index} className={habit.done ? "habit-done" : "habit-not-done"}>
                            <p>{habit.name}</p>
                            {habit.done ? <IoCheckmarkCircle className="done" /> : <IoCloseCircle className="not-done" />}
                        </HabitElement>
                    ))}
                </HabitsList>
            ) : <></>}
            <Menu />
        </HistoricSection>
    );
}

const HistoricSection = styled.main`
    width: 100%;
    /* max-height: calc(100vh - 160px);
    overflow: scroll; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    margin-top: 70px;
    /* padding-bottom: 100px; */
    margin-bottom: 90px;
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

const CalendarSection = styled.div`
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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-complete-habits-day);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        text-align: center;
    }

    .incomplete {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-incomplete-habits-day);
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 50%;
    }

    .react-calendar__tile--active,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        color: inherit;
        background: none;
    }

    .react-calendar__tile--now {
      background: #ffff76;
    }
    
    /* .react-calendar__navigation button:disabled,
    .react-calendar__tile:disabled {
      background-color: transparent;
      color: inherit;
    } */
`;

const HabitsList = styled.ul`
    width: 335px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 10px;

    h3 {
        font-size: 20px;
        line-height: 25px;
        color: #52b6ff;
        margin-bottom: 15px;
    }
`;

const HabitElement = styled.li`
    width: 50%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    
    p {
        font-size: 16px;
        line-height: 22px;
        color: #666;
    }

    &.habit-done {
        border: 2px solid var(--color-complete-habits-day);
        border-radius: 5px;
    }

    &.habit-not-done {
        border: 2px solid var(--color-incomplete-habits-day);
        border-radius: 5px;
    }

    .not-done {
        width: 20px;
        height: 20px;
        color: var(--color-incomplete-habits-day);
    }
    
    .done {
        width: 20px;
        height: 20px;
        color: var(--color-complete-habits-day);
    }
`;

