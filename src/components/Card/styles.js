import styled from 'styled-components';

export const Container = styled.div`
    width: 140px;
    height: 200px;
    box-shadow: -3px 1px 12px -2px rgba(0,0,0,0.73);
    background-color: #fff;
    border: solid 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-top: 6%;
    margin-bottom: 6%;
    
`
export const ContainerImg = styled.div`
    
    img {
        max-height: 185px;
        max-width: 145px;
        cursor: pointer;
        transition: all 0.5s ease;

        &:hover{
            opacity: 0.5;
        }
    }
    
`

export const ContainerLabel = styled.div`
    font-size: 20px;
    position: absolute;
    margin-top: 16%;
    font-weight: bold;
    width: 190px;
    height: 20px;
    text-align: center;
    color: black;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
        height: 90px;
        position: absolute;
        margin-top: 20%;
        
    }
    
`
