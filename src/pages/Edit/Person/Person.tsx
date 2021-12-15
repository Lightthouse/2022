import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {Title} from "components/Title/Title";
import {EditBlock} from "components/EditBlock/EditBlock";
import {EditButton} from "components/EditButton/EditButton";
import {AddInput} from "components/AddInput/AddInput.styled";
import {AddingContainer} from "components/AddingContainer/AddingContainer.styled";
import {AddButton} from "components/AddButton/AddButton";
import {RemoveButton} from "components/RemoveButton/RemoveButton";
import {PersonInfo, PersonList, PersonName, Photo, Tmp} from "./Person.styled";
import {useActions} from "hooks/useActions";
import {nanoid} from "@reduxjs/toolkit";



export const Person = () => {
    const TYPE = "person";

    const person = useAppSelector(state => state.filling.person)
    const {add, remove} = useActions()

    const [isEdit, setIsEdit] = useState(false)
    const [personName, setPersonName] = useState("")

    const personIsFilled = () => personName
    const enterPerson = (key: string) => {
        if(key === 'Enter') {
            savePerson();
        }
    }
    const savePerson = () => {
        if(personIsFilled()) {
            add({
                fillingType: TYPE,
                value: {
                    id: nanoid(),
                    name: personName,
                    photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsexhd.pics%2Fgallery%2Fallgirlmassage%2Fnatasha-starr%2Fdedicated-close-up-premium-version%2Fnatasha-starr-14.jpg&f=1&nofb=1"
                }
            })

            setPersonName("")
        }
    }
    const removePerson = (personId: string) => {
        remove({
            fillingType: TYPE,
            value: personId
        })
    }


    const saveFile = (e: any) => {
        let selectedFile = e.target.files[0];
        let reader = new FileReader();

        console.log("here")
        reader.onload = function(e) {
            let rs = e?.target?.result ?? "hyi"
            add({
                fillingType: TYPE,
                value: {
                    id: nanoid(),
                    name: personName,
                    photo: rs
                }
            })
        };

        reader.readAsDataURL(selectedFile);

    }

    return (
        <EditBlock>
            <Title>Участники</Title>

            <PersonList>
                {
                    person.map(p =>
                        <PersonInfo key={p.id}>
                            <Photo bgi={p.photo} />
                            <PersonName>
                                {p.name}
                                <RemoveButton removeFunc={() => removePerson(p.id)} editState={isEdit}/>
                            </PersonName>
                        </PersonInfo>
                    )
                }
            </PersonList>

            <AddingContainer editMode={isEdit}>
                <input type={"file"} onChange={(e) => saveFile(e)}/>
                <AddInput type="text" placeholder={"Имя"}
                          value={personName}
                          onKeyUp={(e) => enterPerson(e.key) }
                          onChange={(e) => setPersonName(e.target.value)}/>
                <AddButton saveFunc={savePerson}/>
            </AddingContainer>

            <EditButton editStateFunc={() => setIsEdit(!isEdit)} />
        </EditBlock>
    );
};

