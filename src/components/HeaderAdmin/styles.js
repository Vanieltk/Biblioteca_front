import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.5em;
    background: #ECB248;
    display: flex;
`

export const Left = styled.div`
    width: 47%;
    height: 3em;
    display: flex;
    align-items: center;
    padding-left: 5em; 
    padding-top: 0.5em;
    
    a {
        text-decoration: none;
    }

    img {
        width: 50vh;
        height: 4em;
    }
    &:hover {
        opacity: 0.5;
    }

    

`

export const Right = styled.div`
    width: 47%;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: flex end;
    margin-right: -5em;

    a {
        color: #4A0000;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5em;
        margin: 0 1em;
        margin-top: 1em;

        &:hover {
            opacity: 0.5;
        }
    }
    
    .pipe {
        margin-left: 0 5px;
        color: gray;
        text-align: bottom;
        font-size: 1.8em;
        padding-top: 20px;
        
        
    }
               
`