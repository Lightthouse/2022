import React from 'react';

import {EditStyled, Tmp} from "./Edit.styled";

import {Person} from "./Person/Person";
import {Stuff} from "./Stuff/Stuff";
import {Food} from "./Food/Food";
import {Music} from "./Music/Music";
import {HomeToy} from "../../components/HomeToy/HomeToy";

export const Edit = () => {

    return (
        <EditStyled>
            <Tmp href={"./"}/>
            {/*<HomeToy/>*/}
            <Person/>
            <Stuff/>
            <Food/>
            <Music/>
        </EditStyled>
    );
};

