import styled from "styled-components";

export const EditBlock = styled.div`
  background-color: chocolate;
  padding: 1em;
  border-radius: 5%;
  box-shadow: 6px 6px 20px 5px;
  margin: 1em 1em 1em 1em;
  width: 14em;

  @media(max-width: 1400px) {
    font-size: 20px;
    width: 13em;
  }
  
  @media(max-width: 700px) {
    font-size: 20px;
    width: 20em;
  }
  
  @media(max-width: 500px) {
    font-size: 17px;
    width: 14em;
  }
  
  @media(max-width: 400px) {
    font-size: 17px;
  }

  @media(max-width: 300px) {
    font-size: 15px;
    width: 13em;
  }


`