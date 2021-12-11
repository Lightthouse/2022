import React, {FC} from 'react';
import {EditButtonStyled} from "./EditButton.styled";


type tmp = (state: boolean) => any
export const EditButton = ({editState, editStateFunc}: {editState: boolean, editStateFunc: tmp}) => {

    const toggleEdit = () => {
        editStateFunc(!editState)
    }

    return (
        <EditButtonStyled onClick={() => toggleEdit()}>
            Изменить
        </EditButtonStyled>
    );
};

