import React from "react";
import * as S from './styles';
import logo from '../../assets/header-logo.png';

function HeaderAdmin() {
    return (
        <S.Container>
            <S.Left>
                <a href="#"><img src={logo} alt="logo HeaderAdmin"/></a>
            </S.Left>
            <S.Right>
                <a href="#">HOME</a>
                <span className="pipe">|</span>
                <a href="#">FUNCIONARIOS</a>
                <span className="pipe">|</span>
                <a href="#">ACERVO</a>
                <span className="pipe">|</span>
                <a href="#">SAIR</a>
            </S.Right>
        </S.Container>
    )
}

export default HeaderAdmin;