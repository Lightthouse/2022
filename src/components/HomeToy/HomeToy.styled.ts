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
`

export const House = styled.div`
  background-image: url("https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/918e7688-7d3a-406e-ab9c-50e96c54e802/responsive-icons-svg-opt.png");
  width: 200px;
  height: 200px;
  position: fixed;
  top: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid darkred;
  cursor: pointer;
  
  border-radius: 50%;
  
  
`
// media - 80px