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
        padding: 10px 100px 10px 160px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .cadastro-direita {
        padding-left: 100px;
        padding: 10px 100px 10px 120px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .p-float-label {
        width: 300px;
        height: 50px;
        margin-bottom: 20px;
        margin-top: 5px;
        font-size: large;
    }

    .in {
        width: 300px;
        height: 45px;
    }


    Button {
        margin-left: 120.5%;
        margin-top: -1%;
        height: 50px;
        width: 300px;
        border-radius: 0;
    }

    h1 {
        position: absolute;
        top: 10px;
        left: 160px;
        color: #4A0000;
    }

    label {
        font-weight: bold;
    }
`