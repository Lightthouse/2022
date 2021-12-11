import styled from "styled-components";

export const PersonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  //flex-direction: column;
`

export const PersonBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1em;
`


export const PersonPhoto = styled('div')<{background: string}>`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
`;

export const PersonName = styled.span`
    font-weight: bold;
`;