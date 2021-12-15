import React from 'react';
import {RemoveButtonStyled} from "./RemoveButton.styled";

export const RemoveButton = ({removeFunc, editState}: removeButtonProps) => {


    return (
        <RemoveButtonStyled onClick={removeFunc} editMode={editState}>
            x
        </RemoveButtonStyled>
    );
};

