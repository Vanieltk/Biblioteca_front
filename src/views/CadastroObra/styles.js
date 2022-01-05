import styled from 'styled-components';

export const Conteiner = styled.div`

    background: #FDF3C4;
    height: 100%;
    
`
export const ConteinerCenter = styled.div`

    background-color: #F5D58A;
    height: 100px;
    margin: 0px 100px; 
    position: relative;

    
    .titulo{
        height: 50px;
        width: 100%;
    }

    h3{
        margin-top: 0;
        padding-top: 30px;
        margin-left: 180px;
        color: #4A0000;
        font-size: 2em;
    }

`
export const ConteinerContent = styled.div`

    justify-content: space-evenly;
    background-color: #F5D58A;
     height: 100vh;
    margin: 0px 100px;
    display: flex;   

    .upload{
        background-color: #fff;
        margin-top: 100px;
        width:500px;
        height: 200px;
    }

    .rightside{
        display: flex;
        flex-direction: column;
    }

    .p-float-label {
        width: 400px;
        height: 50px;
        margin-bottom: 60px;
        margin-top: 5px;
        font-size: large;
        :first-child{
            margin-top: 95px;
        }    
    }

    .in {
        width: 500px;
        height: 60px;
    }

    .descricao{
        width: 500px;
        height: 170px;
    }

    .buttonCadastrarContainer{
        height: 50px;
        width: 290%;
        border-radius: 10;
        margin-top: 150px;
        margin-bottom: 100px;
    }
`