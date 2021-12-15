import React, {FC} from 'react';
import {TitleStyled} from "./Title.styled";

export const Title: FC = (props) => {
    return (
        <TitleStyled>
            {props.children}
        </TitleStyled>
    );
};

