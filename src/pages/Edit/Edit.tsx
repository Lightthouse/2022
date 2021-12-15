import React, {useEffect, useState} from 'react';

import {EditStyled, Dump} from "./Edit.styled";

import {Person} from "./Person/Person";
import {Stuff} from "./Stuff/Stuff";
import {Food} from "./Food/Food";
import {Music} from "./Music/Music";
import {HomeToy} from "components/HomeToy/HomeToy";
import {Note} from "./Note/Note";
import {useAppSelector} from "hooks/useAppSelector";
import {useActions} from "../../hooks/useActions";

export const Edit = () => {


    const allData = useAppSelector(state => state.filling)
    const {set} = useActions()
    const [loaded, setLoaded] = useState(false)
    const dump = () => {

        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(allData, null, 2)], {
            type: "text/plain"
        }));
        a.setAttribute("download", "data.json");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    useEffect(() => {
        let storageData = localStorage.getItem("state")
        if(storageData) {
            set(JSON.parse(storageData))
            setLoaded(true)
        }
    },[loaded])

    return (
        <EditStyled>
            <HomeToy/>
            <Person/>
            <Stuff/>
            <Food/>
            <Music/>
            <Note/>

            <Dump onClick={dump}/>
        </EditStyled>
    );
};

