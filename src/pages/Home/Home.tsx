import React, {FC, useEffect, useState} from 'react';
import table from "assets/table.jpeg"
import stephan from "assets/stephan.jpg"
import {Person, Photo} from "./Home.styled";
import {newYearTimer} from "../../utils/utils";
import {useTimer} from "react-timer-hook";

export const Home: FC = () => {
    const {    seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart} = useTimer({expiryTimestamp: newYearTimer(), onExpire: () =>console.log("expo")})



    return (
        <div>
            <h1>Составляем новый год!</h1>
            <span>Адрес</span>
            <span>До нового года: {days}д. {hours}ч. {minutes}м. {seconds}с.</span>
            <img src={table} alt="стол"/>

            <Person>
                <Photo src={stephan} alt="stephan"/>
                <span>Степан</span>
            </Person>
        </div>
    );
};
