import {EditButtonStyled} from "./EditButton.styled";


export const EditButton = ({editStateFunc}: any) => {

    return (
        <EditButtonStyled onClick={editStateFunc}>
            Изменить
        </EditButtonStyled>
    );
};

