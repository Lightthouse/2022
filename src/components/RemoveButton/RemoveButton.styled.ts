import styled from "styled-components";


export const RemoveButton = styled('button')<{editMode: boolean}>`
  visibility: ${(props => props.editMode ? `visible` : `hidden`)};
  height: 1em;
  width: 1em;
  text-align: center;
  border: none;
  color: darkred;
  font-size: xx-large;
  font-weight: bold;
  background-color: chocolate;
  cursor: pointer;
`