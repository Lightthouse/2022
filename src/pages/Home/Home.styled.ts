import styled from "styled-components";


export const HomeStyled = styled.div`
  background-color: navajowhite;
  background-image: url("https://storge.pic2.me/upload/735/54881b0b81364.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  //flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;


`

export const Title = styled.h1`
  background-color: navajowhite;
  
  border: 25px solid #B88846;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
  
  width: 14em;
  text-align: center;



  @media(max-width: 800px) {
    font-size: 25px;
    width: 16em;
  }
  

  @media(max-width: 600px) {
    font-size: 20px;
    //width: 14em;
  }
  
  @media(max-width: 400px) {
    font-size: 16px;
  }

  @media(max-width: 300px) {
    font-size: 14px;
  }
  

`

export const Hat = styled.div`

  
    position: absolute;
    left: 50%;
    margin: 0 0 0 -50px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 50px 110px 50px;
    border-color: transparent transparent #a40000 transparent;
    line-height: 0;
    _border-color: #000000 #000000 #a40000 #000000;
    _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
  

  :after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 40px 0 0 100px;
    border-color: transparent transparent transparent #a40000;

    -webkit-transform: rotate(15deg);
    -webkit-transform-origin: top left;

    -moz-transform: rotate(15deg);
    -moz-transform-origin: top left;

    -ms-transform: rotate(15deg);
    -ms-transform-origin: top left;

    -o-transform: rotate(15deg);
    -o-transform-origin: top left;

    transform: rotate(15deg);
    transform-origin: top left;
  }

  :before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    left: 75px;
    top: 55px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    z-index: 1;
  }
`

export const PartyInfo = styled.div`
  width: 12em;
  background-color: #8e010a;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 0.3em solid black;
  padding: 1em;
  font-weight: bold;
  white-space: nowrap;

  @media(max-width: 600px) {
    font-size: large;
    width: 12em;
  }
  
  @media(max-width: 350px) {
    font-size: large;
    width: 12em;
  }
`

export const PersonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`
export const Person = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin: 2em 1em 3em 1em;

  height: 10em;
  width: 8em;
  
  text-align: center;
  
  animation: swing ease-in-out 2s infinite alternate;
  transform-origin: center -20px;
  float:left;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);


  :after{
    content: '';
    position: absolute;
    width: 20px; height: 20px;
    border: 2px solid #999;
    top: -10px; left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
  }

  :before{
    content: '';
    position: absolute;
    width: 5px; height: 5px;
    top: -14px;left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
  }

  @keyframes swing {
    0% { transform: rotate(10deg); }
    100% { transform: rotate(-10deg); }
  }

  //@media(max-width: 500px) {
  //  height: 9em;
  //  width: 7em;
  //}
`
export const PersonPhoto = styled.img`
  border: 5px solid #f8f8f8;
  height: 100%;
  object-fit: cover;

`
export const PersonName = styled.figcaption`
  width: 100%;
  font-weight: bold;
  color: navajowhite;
`

export const Timer = styled.div`
  background-color: navajowhite;
  
  width: 18em;
  border: 25px solid #B88846;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 1em;

  @media(max-width: 600px) {
    font-size: 18px;
    width: 16em;
  }

  @media(max-width: 350px) {
    font-size: 14px;
  }
`

export const Contacts = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`
export const SettingsLink = styled.a`
  display: block;
  width: 3.5em;
  height: 3.5em;
  background-image: url("https://www.nicepng.com/png/full/10-107944_circle-icons-tools-tools-circle-icon-png.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-left: 3px;

`
export const Telegram = styled.a`
  display: block;
  width: 3.5em;
  height: 3.5em;
  background-image: url("https://media.wired.com/photos/600f12796a02aa6825bba609/125:94/w_2125,h_1598,c_limit/Science_telegram_1220060398.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  transform: scale(-1, 1);
  margin-left: 1em;
`
export const Phone = styled('div')<{phoneNumber: string, phoneShow: boolean}>`
  background-image: url("https://www.pinclipart.com/picdir/big/540-5401844_blue-circle-phone-icon-clipart.png");
  width: 3.5em;
  height: 3.5em;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-left: 1em;
  margin-right: 2px;
  cursor: pointer;

  ${props => props.phoneShow && 
    `:after {
        content: "+7-(912) 388-35-38";
        background-color: dimgray;
        position: relative;
        top: 40%;
        left: 110%;
        font-weight: bold;
        white-space: nowrap;
  }`}



`
