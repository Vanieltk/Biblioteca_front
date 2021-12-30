import styled from 'styled-components';

export const Conteiner = styled.div`
    
    background-color: #FDF3C4;
    background-size: 100vw 100vh;
    position: cover;
    width: 100%;
    height: 100%;
    
    .teste {
        background-color: #F5D58A;
        width: 90%;
        height: 70px;
        margin-left: 5%;
        margin-right: 5%;
    }
 
`

export const ConteinerLogo = styled.div`
  
    display: flex;
    height: 30vh;
    
    text-align: center;
    img {
        margin-top: -40px;
        height: 40vh;
        margin-left: 130px;
    }


`
export const ConteinerContent = styled.div`
    
    width: 90%;
    
    background-color: #F5D58A;
    
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 30px;

    section {
        /* display: flex;
        flex-wrap: wrap;
        flex: 1 0 21%; */
        display: grid;
        grid-template-columns: repeat(4, 25%);
        justify-content: space-evenly;
        padding: 10px 100px 10px 220px;
    }

    .div-traco h3 {
        padding-left: 18%;
        color: #4A0000;
    }

    .div-traco .linha {
        
        border: 1px solid #C1C1C1;
        margin: 1.5% 15% 0.5% 16.8%;
    }
    
`