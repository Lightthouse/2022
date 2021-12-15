import React from 'react';

import {EditStyled} from "./Edit.styled";

import {Person} from "./Person/Person";
import {Stuff} from "./Stuff/Stuff";
import {Food} from "./Food/Food";
import {Music} from "./Music/Music";
import {HomeToy} from "components/HomeToy/HomeToy";
import {Note} from "./Note/Note";

export const Edit = () => {

    return (
        <EditStyled>
            <HomeToy/>
            <Person/>
            <Stuff/>
            <Food/>
            <Music/>
            <Note/>
        </EditStyled>
    );
};

