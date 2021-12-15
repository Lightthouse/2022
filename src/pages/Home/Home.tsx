import React, {FC, useEffect, useState} from 'react';
import {
    Contacts,
    HomeStyled,
    Person,
    PersonContainer,
    PersonName,
    PersonPhoto,
    Phone,
    Telegram,
    Hat,
    Timer,
    Title,
    PartyInfo,
    SettingsLink,
} from "./Home.styled";
import {newYearDate, CONTACT_PHONE, CONTACT_TELEGRAM, ADDRESS, MEETING_TIME} from "utils/utils";
import {useTimer} from "react-timer-hook";
import {useAppSelector} from "hooks/useAppSelector";
import Snowfall from 'react-snowfall'
import {Hr} from "components/Hr/Hr.styled";
import {useActions} from "../../hooks/useActions";

export const Home: FC = () => {
    const { seconds, minutes, hours, days,} = useTimer({expiryTimestamp: newYearDate(), onExpire: () => console.log("expo")})
    const {set} = useActions()
    const [loaded, setLoaded] = useState(false)
    const [phoneShow, setPhoneShow] = useState(false)

    const twoDigits = (num: number) => {
        const stringNum = String(num);
        return (stringNum.length > 1) ? stringNum : "0" + stringNum;
    }

    const personList = useAppSelector(state => state.filling.person)

    useEffect(() => {
        let storageData = localStorage.getItem("state")
        if(storageData) {
            set(JSON.parse(storageData))
            setLoaded(true)
        }
    }, [loaded])

    return (
        <HomeStyled>
            <Title>Встречаем новый год!</Title>

            <PartyInfo>
                <div>Адрес: {ADDRESS}</div>
                <Hr/>
                <div>Время: {MEETING_TIME}</div>
            </PartyInfo>

            <Snowfall/>

            <PersonContainer>
                {
                    personList.map(p =>
                        <Person key={p.id}>
                            <PersonPhoto src={p.photo} alt={p.name}/>
                            <PersonName>{p.name}</PersonName>
                        </Person>
                    )
                }

            </PersonContainer>

            <Timer>До нового года: {twoDigits(days)}д. {twoDigits(hours)}ч. {twoDigits(minutes)}м. {twoDigits(seconds)}с.</Timer>

            <Contacts>
                <SettingsLink href={"/edit"}/>
                <Telegram href={CONTACT_TELEGRAM}/>
                <Phone onClick={() => setPhoneShow((prev) => !prev)} phoneShow={phoneShow} phoneNumber={CONTACT_PHONE}/>
            </Contacts>
        </HomeStyled>
    );
};
