import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {Title} from "components/Title/Title";
import {EditButton} from "components/EditButton/EditButton";
import {EditBlock} from "components/EditBlock/EditBlock";
import {RemoveButton} from "components/RemoveButton/RemoveButton";
import {useActions} from "hooks/useActions";
import {AddButton} from "components/AddButton/AddButton";
import {nanoid} from "@reduxjs/toolkit";
import {AddInput} from "components/AddInput/AddInput.styled";
import {EntityContainer} from "components/EntityContainer/EntityContainer.styled";
import {AddingContainer} from "components/AddingContainer/AddingContainer.styled";
import {EntityName} from "components/EntityName/EntityName.styled";
import {Hr} from "components/Hr/Hr.styled";


export const Food = () => {
    const TYPE = "food";

    const food = useAppSelector(state => state.filling.food)
    const {add, remove} = useActions()

    const [isEdit, setEdit] = useState(false)
    const [foodName, setFoodName] = useState("");
    const [foodVolume, setFoodVolume] = useState("");
    const [foodCount, setFoodCount] = useState("");

    const foodIsFilled = () => foodName && (foodVolume || foodCount);

    const enterFood = (key: string) => {
        if(key === 'Enter') {
            saveFood();
        }
    }

    const saveFood = () => {
        if(foodIsFilled()) {
            add({
                fillingType: TYPE,
                value: {
                    id: nanoid(),
                    name: foodName,
                    volume: foodVolume,
                    count: foodCount
                }
            })

            setFoodName("")
            setFoodVolume("")
            setFoodCount("")
        }
    }

    const removeFood = (foodId: string) => {
        remove({
            fillingType: TYPE,
            value: foodId
        })
    }

    return (
        <EditBlock>
            <Title>Еда</Title>

            {
                food.map(f =>
                    <div key={f.id}>
                        <EntityContainer key={f.id}>
                            <EntityName>{f.name} {f.volume} <b>x</b> {f.count ?? 1}</EntityName>
                            <RemoveButton removeFunc={() => removeFood(f.id)} editState={isEdit}/>
                        </EntityContainer>
                        <Hr/>
                    </div>
                )
            }

            <AddingContainer editMode={isEdit}>
                <AddInput type="text" placeholder={"Название..."}
                           value={foodName}
                           onKeyUp={(e) => enterFood(e.key) }
                           onChange={(e) => setFoodName(e.target.value)}/>
                <AddInput type="text" placeholder={"Объем (кг/л)"}
                           value={foodVolume}
                           onKeyUp={(e) => enterFood(e.key) }
                           onChange={(e) => setFoodVolume(e.target.value)}/>
                <AddInput type="text" placeholder={"Количество"}
                           value={foodCount}
                           onKeyUp={(e) => enterFood(e.key) }
                           onChange={(e) => setFoodCount(e.target.value)}/>
                <AddButton saveFunc={saveFood}/>
            </AddingContainer>

            <EditButton editStateFunc={() => setEdit(!isEdit)} />

        </EditBlock>
    );
};

