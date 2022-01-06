import styled from 'styled-components';
import imagemFundo from '../../assets/background-2.png';


export const Container = styled.div`

    width: 100%;
    height: 100%;    
    background: url(${imagemFundo});
    background-size: 100vw 100vh;
    position: fixed;
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
        padding: 10px 100px 10px 200px;
        margin-bottom: 20px;
        margin-top: 50px;
    }

    .cadastro-direita {
       
        padding: 10px 100px 1px 30px;
        
        margin-top: 0;
    }

    .p-float-label {
        width: 400px;
        height: 50px;
        margin-bottom: 20px;
        margin-top: -5px;
        font-size: large;
    }

    .in {
        width: 300px;
        height: 45px;
    }

    .div-button-esquerda {
        display: flex;
        justify-content:center
        /* margin-top: 40px;
        margin-left: -250px; */
    }

    .div-button-direita {
        display: flex;
        justify-content: flex-start;
        margin-left: 12.5%;
        /* margin-top: 40px;
        margin-left: -250px; */
    }

    .button-direita {
        display: flex;
        justify-content: center;
    }

    Button {
        height: 50px;
        width: 200px;
    }
    

    h1 {
        position: absolute;
        font-size: 50px;
        top: -10px;
        left: 80px;
        color: #4A0000;
    }

    label {
        font-weight: bold;
    }
`