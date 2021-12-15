import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {Title} from "components/Title/Title";
import {EditBlock} from "components/EditBlock/EditBlock";
import {EditButton} from "components/EditButton/EditButton";
import {AddInput} from "components/AddInput/AddInput.styled";
import {EntityContainer} from "components/EntityContainer/EntityContainer.styled";
import {AddingContainer} from "components/AddingContainer/AddingContainer.styled";
import {EntityName} from "components/EntityName/EntityName.styled";
import {AddButton} from "components/AddButton/AddButton";
import {nanoid} from "@reduxjs/toolkit";
import {useActions} from "hooks/useActions";
import {RemoveButton} from "components/RemoveButton/RemoveButton";
import {Hr} from "components/Hr/Hr.styled";


export const Stuff = () => {
    const TYPE = "stuff";

    const stuff = useAppSelector(state => state.filling.stuff)
    const {add, remove} = useActions()

    const [isEdit, setIsEdit] = useState(false)

    const [stuffName, setStuffName] = useState("")
    const [stuffCount, setStuffCount] = useState("")

    const stuffIsFilled = () => stuffName && stuffCount;

    const enterTrack = (key: string) => {
        if(key === 'Enter') {
            saveTrack();
        }
    }

    const saveTrack = () => {
        if(stuffIsFilled()) {
            add({
                fillingType: TYPE,
                value: {
                    id: nanoid(),
                    name: stuffName,
                    count: stuffCount,
                }
            })
            setStuffName("")
            setStuffCount("")
        }

    }
    const removeStuff = (stuffId: string) => {
        remove({fillingType: TYPE, value: stuffId})
    }
    return (
        <EditBlock>

            <Title>Инвентарь</Title>
            {
                stuff.map(s =>
                    <div key={s.id}>
                        <EntityContainer>
                            <EntityName>{s.name} <b>x</b> {s.count}</EntityName>
                            <RemoveButton removeFunc={() => removeStuff(s.id)} editState={isEdit}/>
                        </EntityContainer>
                        <Hr/>
                    </div>

                )
            }

            <AddingContainer editMode={isEdit}>
                <AddInput type="text"
                          placeholder="Инвентарь..."
                          value={stuffName}
                          onKeyUp={(e) => enterTrack(e.key) }
                          onChange={(e) => setStuffName(e.target.value)}/>
                <AddInput type="text"
                          placeholder="Количество..."
                          value={stuffCount}
                          onKeyUp={(e) => enterTrack(e.key) }
                          onChange={(e) => setStuffCount(e.target.value)}/>
                <AddButton saveFunc={saveTrack}/>
            </AddingContainer>

            <EditButton editStateFunc={() => setIsEdit(!isEdit)} />
        </EditBlock>
    );
};

