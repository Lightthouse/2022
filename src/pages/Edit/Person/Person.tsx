import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {Title} from "components/Title/Title";
import {EditContainerStyled} from "components/EditContainer/EditContainer.styled";
import {EditButton} from "components/EditButton/EditButton";
import {PersonName, PersonPhoto, PersonContainer, PersonBlock} from "./Person.styled";


export const Person = () => {

    const person = useAppSelector(state => state.filling.person)
    const [isEdit, setEdit] = useState(false)
    return (
        <EditContainerStyled>
            <Title>Участники</Title>

            <PersonContainer>
                {
                    person.map(p =>
                        <PersonBlock key={p.id}>
                            <PersonPhoto background={p.photo} />
                            <PersonName>{p.name}</PersonName>
                        </PersonBlock>
                    )
                }
                {
                    person.map(p =>
                        <PersonBlock key={p.id + 1}>
                            <PersonPhoto background={p.photo} />
                            <PersonName>{p.name}</PersonName>
                        </PersonBlock>
                    )
                }

                {
                    person.map(p =>
                        <PersonBlock key={p.id + 2}>
                            <PersonPhoto background={p.photo} />
                            <PersonName>{p.name}</PersonName>
                        </PersonBlock>
                    )
                }
            </PersonContainer>

            <EditButton editState={isEdit} editStateFunc={setEdit} />
        </EditContainerStyled>
    );
};

