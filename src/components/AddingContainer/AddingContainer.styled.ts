import styled from "styled-components";

export const AddingContainer = styled('div')<{editMode: boolean}>`
  width: 100%;
  display: ${(props) => props.editMode ? `flex` : `none`};
  justify-content: space-between;
  align-items: baseline;
`