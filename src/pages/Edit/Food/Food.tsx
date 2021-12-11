import React, {useState} from 'react';
import {useAppSelector} from "hooks/useAppSelector";
import {Title} from "components/Title/Title";
import {EditButton} from "components/EditButton/EditButton";
import {FoodName, FoodStyled, FoodInput} from "./Food.styled";
import {EditContainerStyled} from "../../../components/EditContainer/EditContainer.styled";


export const Food = () => {
    const food = useAppSelector(state => state.filling.food)

    const [isEdit, setEdit] = useState(false)

    return (
        <EditContainerStyled>
            <Title>Еда</Title>
            {
                food.map(f =>
                    <div key={f.id}>
                        <span>{f.name} {f.volume} x {f.count ?? 1}</span>
                    </div>
                )
            }
            <FoodName hidden={!isEdit}>
                <FoodInput type="text" placeholder={"название"}/>
                <FoodInput type="text" placeholder={"объем (кг/л)"}/>
                <FoodInput type="text" placeholder={"количество"}/>
            </FoodName>
            <EditButton editState={isEdit} editStateFunc={setEdit} />

        </EditContainerStyled>
    );
};

