import styled, { keyframes } from "styled-components";

const shroudAnimation = keyframes`
  0%  {background-color: transparent;}
  100%{background-color: darkred}
`
export const Shroud = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;

  animation-name: ${shroudAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  border-radius: 50%;
  &:hover {
    animation-duration: 0s;
  }

  //@media(max-width: 1400px) {
  //  width: 7em;
  //}
`

export const House = styled.div`
  background-image: url("https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/918e7688-7d3a-406e-ab9c-50e96c54e802/responsive-icons-svg-opt.png");
  width: 8em;
  height: 8em;
  position: fixed;
  top: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid darkred;
  cursor: pointer;
  
  border-radius: 50%;

  @media(max-width: 1400px) {
    width: 7em;
    height: 7em;
  }

  @media(max-width: 1000px) {
    width: 6em;
    height: 6em;
  }
  
  @media(max-width: 800px) {
    width: 5em;
    height: 5em;
  }

  @media(max-width: 600px) {
    width: 4em;
    height: 4em;
  }
`
