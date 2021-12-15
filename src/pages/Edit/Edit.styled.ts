import styled from "styled-components";
import bgi from "assets/bp.jpg"


export const EditStyled = styled.div`
   min-width: 100vw;
   min-height: 100vh;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    
    background-image: url(${bgi});
    
    word-break: break-all;
  
  //overflow: hidden;
`

export const Dump = styled.div`
  width: 2em;
  height: 2em;
  background-color: dimgray;
  position: absolute;
  border-radius: 50%;
  cursor: progress;
  opacity: 0;
  bottom: 0;
  right: 0;
`