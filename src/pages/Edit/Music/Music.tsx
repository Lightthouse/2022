import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {MusicStyled, TrackAdding, TrackInput, MusicTitle, TrackContainer, Track} from "./Music.styled";
import {Title} from "components/Title/Title";
import {EditButton} from "components/EditButton/EditButton";
import {useActions} from "hooks/useActions";
import {nanoid} from "@reduxjs/toolkit";
import {AddButton} from "components/AddButton/AddButton";
import {RemoveButton} from "components/RemoveButton/RemoveButton.styled";
import {EditContainerStyled} from "components/EditContainer/EditContainer.styled";


export const Music = () => {

    const music = useAppSelector(state => state.filling.music)
    const {add, remove} = useActions()

    const [isEdit, setIsEdit] = useState(false)
    const [author, setAuthor] = useState("")
    const [track, setTrack] = useState("")

    const trackIsFilled = () => track && author;

    const enterTrack = (key: string) => {
        if(key === 'Enter' && trackIsFilled()) {
            saveTrack();
        }
    }

    const saveTrack = () => {
        if(trackIsFilled()) {
            add({
                fillingType: "music",
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
        remove({fillingType: "music", value: trackId})
    }

    return (
        <EditContainerStyled>
            <Title>Музыка</Title>

            {
                music.map(m =>
                    <TrackContainer key={m.id}>
                        <Track><b>{m.author}</b> {m.name}</Track>
                        <RemoveButton onClick={() => removeTrack(m.id)} editMode={isEdit}>x</RemoveButton>
                    </TrackContainer>
                )
            }

            <TrackAdding editMode={isEdit}>
                <TrackInput type="text"
                            placeholder="Автор..."
                            value={author}
                            onKeyUp={(e) => enterTrack(e.key) }
                            onChange={(e) => setAuthor(e.target.value)}/>
                <TrackInput type="text"
                            placeholder="Трек..."
                            value={track}
                            onKeyUp={(e) => enterTrack(e.key) }
                            onChange={(e) => setTrack(e.target.value)}/>
                <AddButton onClick={() => saveTrack()}>+</AddButton>
            </TrackAdding>

            <EditButton editState={isEdit} editStateFunc={setIsEdit} />
        </EditContainerStyled>
    );
};

