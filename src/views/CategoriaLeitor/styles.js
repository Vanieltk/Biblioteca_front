import styled from 'styled-components';

export const Container = styled.div`

    background-color: #FDF3C4;
    width: 100%;
    height: 100%;
`   

export const CaixaContainer = styled.div`
    
    display: grid;
    grid-template-columns: repeat(2, 50%);
    background-color: #F5D58A;
    width: 80vw;
    height: 100vh;
    position: relative;
    margin: 0 auto;
  
    
    .div-titulo h1 {
        padding-left: 18%;
        padding-top: 20px;
        color: #4A0000;
        text-transform: uppercase;
    }

.todo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 360px;
  padding: 4rem 2rem;
  /* background-color: #111; */
}

.todo-wrapper h1 {
  color: #fff;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4eb879;
  transition: color 0.3s;
  font-family: "Permanent Marker", cursive;
}

.todo-wrapper h1:hover {
  color: #4eb879;
}
`

