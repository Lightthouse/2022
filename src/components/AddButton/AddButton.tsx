import React from 'react';
import {AddButtonStyled} from "./AddButton.styled";

export const AddButton = ({saveFunc}: addButtonProps) => {

    return (

        <AddButtonStyled onClick={saveFunc}>
            +
        </AddButtonStyled>
    );
};

