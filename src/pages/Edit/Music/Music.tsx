import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {Title} from "components/Title/Title";
import {EditButton} from "components/EditButton/EditButton";
import {useActions} from "hooks/useActions";
import {nanoid} from "@reduxjs/toolkit";
import {RemoveButton} from "components/RemoveButton/RemoveButton";
import {EditBlock} from "components/EditBlock/EditBlock";
import {AddButton} from "components/AddButton/AddButton";
import {AddInput} from "components/AddInput/AddInput.styled";
import {EntityContainer} from "components/EntityContainer/EntityContainer.styled";
import {AddingContainer} from "components/AddingContainer/AddingContainer.styled";
import {EntityName} from "components/EntityName/EntityName.styled";


export const Music = () => {
    const TYPE = "music";

    const music = useAppSelector(state => state.filling.music)
    const {add, remove} = useActions()

    const [isEdit, setIsEdit] = useState(false)
    const [author, setAuthor] = useState("")
    const [track, setTrack] = useState("")

    const trackIsFilled = () => track && author;

    const enterTrack = (key: string) => {
        if(key === 'Enter') {
            saveTrack();
        }
    }

    const saveTrack = () => {
        if(trackIsFilled()) {
            add({
                fillingType: TYPE,
                value: {
                    id: nanoid(),
                    author: author,
                    name: track,
                }
            })
            setAuthor("")
            setTrack("")
        }

    }
    const removeTrack = (trackId: string) => {
        remove({fillingType: TYPE, value: trackId})
    }

    return (
        <EditBlock>

            <Title>Музыка</Title>

            {
                music.map(m =>
                    <EntityContainer key={m.id}>
                        <EntityName><b>{m.author}</b> {m.name}</EntityName>
                        <RemoveButton removeFunc={() => removeTrack(m.id)} editState={isEdit}/>
                    </EntityContainer>
                )
            }

            <AddingContainer editMode={isEdit}>
                <AddInput type="text"
                            placeholder="Автор..."
                            value={author}
                            onKeyUp={(e) => enterTrack(e.key) }
                            onChange={(e) => setAuthor(e.target.value)}/>
                <AddInput type="text"
                            placeholder="Трек..."
                            value={track}
                            onKeyUp={(e) => enterTrack(e.key) }
                            onChange={(e) => setTrack(e.target.value)}/>
                <AddButton saveFunc={saveTrack}/>
            </AddingContainer>

            <EditButton editStateFunc={() => setIsEdit(!isEdit)} />
        </EditBlock>
    );
};

