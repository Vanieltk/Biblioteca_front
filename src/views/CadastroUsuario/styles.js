import styled from 'styled-components';

export const Container = styled.div`

    background-color: white;
    width: 100%;
    height: 100%;
    
    
   
`

export const CenterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    background-color: #F5D58A;
    width: 80vw;
    height: 81vh;
    position: relative;
    margin: 50px auto;
    padding-top: 5%;

    .cadastro-esquerda {
        padding-left: 100px;       
        padding: 10px 100px 10px 300px;
        margin-bottom: 20px;
        margin-top: 50px;
    }

    .cadastro-direita {
        padding-left: 100px;
        padding: 10px 100px 10px 100px;
        margin-bottom: 20px;
        margin-top: 50px;
    }

    .p-float-label {
        width: 400px;
        height: 50px;
        margin-bottom: 20px;
        margin-top: 5px;
        font-size: large;
    }

    .in {
        width: 300px;
        height: 45px;
    }

    .buttonCadastrarContainer{
        margin-left: 96%;
        height: 50px;
        width: 100%;
        border-radius: 10;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .buttonVoltarContainer{
        height: 50px;
        margin-left: -45%;

        width: 300px;
        width: 100%;
        border-radius: 10;
        margin-top: 50px;
        margin-bottom: 100px;
    }

    Button {
        
    }

    h1 {
        position: absolute;
        font-size: 60px;
        top: 0px;
        left: 160px;
        color: #4A0000;
    }

    label {
        font-weight: bold;
    }
`