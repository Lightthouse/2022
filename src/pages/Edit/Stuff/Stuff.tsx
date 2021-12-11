import React, {useState} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {Title} from "../../../components/Title/Title";
import {EditContainerStyled} from "../../../components/EditContainer/EditContainer.styled";
import {EditButton} from "../../../components/EditButton/EditButton";

export const Stuff = () => {

    const stuff = useAppSelector(state => state.filling.stuff)
    const [isEdit, setEdit] = useState(false)

    return (
        <EditContainerStyled>
            <Title>Инвентарь</Title>
            {
                stuff.map(s =>
                    <div key={s.id}>
                        <span>{s.name} <b>x</b> {s.count}</span>
                    </div>
                )
            }
            <EditButton editState={isEdit} editStateFunc={setEdit} />
        </EditContainerStyled>
    );
};

