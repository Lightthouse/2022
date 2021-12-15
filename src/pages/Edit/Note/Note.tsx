import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {useActions} from "hooks/useActions";
import {nanoid} from "@reduxjs/toolkit";
import {EditBlock} from "components/EditBlock/EditBlock";
import {Title} from "components/Title/Title";
import {EntityContainer} from "components/EntityContainer/EntityContainer.styled";
import {EntityName} from "components/EntityName/EntityName.styled";
import {RemoveButton} from "components/RemoveButton/RemoveButton";
import {AddingContainer} from "components/AddingContainer/AddingContainer.styled";
import {AddInput} from "components/AddInput/AddInput.styled";
import {AddButton} from "components/AddButton/AddButton";
import {EditButton} from "components/EditButton/EditButton";
import {Hr} from "components/Hr/Hr.styled";

export const Note = () => {
    const TYPE = "note";

    const noteList = useAppSelector(state => state.filling.note)
    const {add, remove} = useActions()

    const [isEdit, setIsEdit] = useState(false)
    const [note, setNote] = useState("")


    const trackIsFilled = () => note;

    const enterNote = (key: string) => {
        if(key === 'Enter') {
            saveNote();
        }
    }

    const saveNote = () => {
        if(trackIsFilled()) {
            add({
                fillingType: TYPE,
                value: {
                    id: nanoid(),
                    name: note,
                }
            })
            setNote("")
        }

    }
    const removeNote = (noteId: string) => {
        remove({fillingType: TYPE, value: noteId})
    }

    return (
        <EditBlock>

            <Title>Заметки</Title>

            {
                noteList.map(n =>
                    <div key={n.id}>
                        <EntityContainer>
                            <EntityName>{n.name}</EntityName>
                            <RemoveButton removeFunc={() => removeNote(n.id)} editState={isEdit}/>
                        </EntityContainer>
                        <Hr/>
                    </div>

                )
            }

            <AddingContainer editMode={isEdit}>
                <AddInput type="text"
                          placeholder="Текст..."
                          value={note}
                          onKeyUp={(e) => enterNote(e.key) }
                          onChange={(e) => setNote(e.target.value)}/>
                <AddButton saveFunc={saveNote}/>
            </AddingContainer>

            <EditButton editStateFunc={() => setIsEdit(!isEdit)} />
        </EditBlock>
    );
};

