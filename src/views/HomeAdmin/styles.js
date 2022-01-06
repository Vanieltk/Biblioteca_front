import styled from "styled-components";

export const Container = styled.div`
  background-color: #fdf3c4;
  background-size: 100vw 100vh;
  position: cover;
  width: 100%;
  height: 100%;

  .div-retangulo-superior {
    background-color: #f5d58a;
    width: 90%;
    height: 70px;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const ConteinerLogo = styled.div`
  display: flex;
  height: 15vh;
  font-size: 70px;
  margin-bottom: -45px;
  color: #4a0000;

  text-align: center;
  img {
    padding-top: 50px;
    margin-top: -80px;
    height: 20vh;
    margin-left: 130px;
  }
`;
export const ConteinerContent = styled.div`
  width: 90vw;
  height: 100vh;

  background-color: #f5d58a;

  margin-left: 5%;
  margin-right: 5%;
  padding-top: 30px;

  #section1 {
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    justify-content: space-evenly;
    // padding-top: 90px;
    // padding-bottom: 90px;
    margin-left: 12.5%;
    margin-bottom: 0%;

    Button {
      border-radius: 12%;
      font-size: 35px;
      font-style: oblique;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 50px;
      padding-bottom: 50px;
      width: 60%;
    }
  }

  #section2 {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 25%);
    justify-content: space-evenly;
    // padding-top: 90px;
    margin-left: 5%;

    Button {
      border-radius: 12%;
      font-size: 35px;
      font-style: oblique;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 50px;
      padding-bottom: 50px;
      width: 80%;
    }
  }
`;
