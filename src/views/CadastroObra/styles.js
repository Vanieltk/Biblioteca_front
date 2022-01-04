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
        margin-left: 90px;
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
        margin-top: 100px;
        width:400px;
        height: 500px
        }


    .rightside{
        display: flex;
        flex-direction: column;
          
    }
    .nomeobra{
        margin-top: 100px;
        height: 50px;
        width: 500px;
    }
    .nomeautor{
        
        margin-top: 50px;
        height: 50px;
        width: 500px;
    }
    .editora{
        
        margin-top: 50px;
        height: 50px;
        width: 500px;
    }
    .descricao{
        
        margin-top: 50px;
        height: 175px;
        width: 500px;
    }
`