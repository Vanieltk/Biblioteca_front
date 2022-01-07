import styled from 'styled-components';
import {} from '../../utils/index.js';
import imagemFundo from '../../assets/background.png';

export const Container = styled.div`

    body {
        background: url(${imagemFundo});
        background-size: 100vw 100vh;
        position: fixed;
        width: 100%;
        height: 100%;
    }    
   
`

export const ContainerRight = styled.div`

    .area-login {

    background-color: #F8E6C4;
    width: 40%;
    height: 65%;
    position: absolute;
    right: 8%;
    bottom: 10%;

        h4 {
            color: #945DFA;
            position: relative;
            left: 15%;
            top: 5%;
            padding-top: 13px;
            font-size: 1.2em;
            font-weight: bold;
        }


        .form-login {
            
            display: grid;
            position: absolute;
            width: 70%;
            height: 70%;
            left: 15%;
            top: 20%;
            font-size: 1.2em;
            color: #8B5E52;
            font-weight: bold;
            border-radius: 5%;
        }

        .form-login Button {
            font-size: 1.3em;
            cursor: pointer;
            &:active {
                background-color: brown;
            }
        }

        .span-cadastro {
            position: relative;
            bottom: -50%;
            left: 12%;
            font-size: 1.4em;
            color: #945DFA;
        }

        .span-cadastro a {
            text-decoration: none;
            color: #4A0000;
            font-weight: bold;
        }

        .form-login input {
            border: none;
            height: 50px;
            border-radius: 3%;
            font-size: 1em;
        }

    }

    .area-login img {
    height: 40%;
    position: absolute;
    top: -20%;
    left: 34%;
    }

    .div-button-esquerda {
        display: flex;
        justify-content:center;
    }
    
`


