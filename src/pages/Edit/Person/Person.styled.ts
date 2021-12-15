import styled from "styled-components";

export const Photo = styled('div')<{bgi: string}>`
  background-image: ${props =>`url(${props.bgi})`} ;
  width: 5em;
  height: 5em;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 3px solid black;
`

export const PersonName = styled.span`
  font-weight: bold;
`

export const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const PersonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const Tmp = styled('div')<{bgi: string}>`
  background-image: ${props => `url(${props.bgi})`};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  
  background-size: cover;

`