import React, {FC, useEffect, useState} from 'react';
import table from "assets/table.jpeg"
import stephan from "assets/stephan.jpg"
import {HomeStyled, Person, PersonContainer, PersonName, PersonPhoto} from "./Home.styled";
import {newYearDate, CONTACT_PHONE, CONTACT_TELEGRAM, ADDRESS} from "utils/utils";
import {useTimer} from "react-timer-hook";
import {useAppSelector} from "../../hooks/useAppSelector";

export const Home: FC = () => {
    const { seconds, minutes, hours, days,} = useTimer({expiryTimestamp: newYearDate(), onExpire: () => console.log("expo")})

    const personList = useAppSelector(state => state.filling.person)

    return (
        <HomeStyled>
            <h1>Встречаем новый год!</h1>
            <div>Адрес: {ADDRESS}</div>

            <div>До нового года: {days}д. {hours}ч. {minutes}м. {seconds}с.</div>

            <PersonContainer>
                {
                    personList.map(p =>
                        <Person>
                            <PersonPhoto src={p.photo} alt={p.name}/>
                            <PersonName>{p.name}</PersonName>
                        </Person>
                    )
                }
            </PersonContainer>


            <div>
                <span>Телефон для связи: {CONTACT_PHONE}</span>
                <span>Канал телеграмм: {CONTACT_TELEGRAM}</span>
            </div>
        </HomeStyled>
    );
};
