import styled from "styled-components";

export const MusicStyled = styled.div`
  background-color: chocolate;
  padding: 1em;
  border-radius: 5%;
  box-shadow: 6px 6px 20px 5px;
`
export const MusicTitle = styled.h1`
  text-align: center;
`

export const TrackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  //text-align: center;
  
`

export const Track = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`


export const TrackAdding = styled('div')<{editMode: boolean}>`
  width: 100%;
  display: ${(props) => props.editMode ? `flex` : `none`};
  justify-content: space-between;
  align-items: baseline;

  //border-bottom-color: black;
  //border-bottom-width: 2px;
  //border-bottom-style: solid;
`

export const TrackInput = styled.input`
  width: 40%;
  margin-left: 0;
  background-color: chocolate;
  border: none;
  font-size: medium;

  
  ::placeholder {
    color: black;
    text-align: center;
    opacity: 0.6;
  }
`
