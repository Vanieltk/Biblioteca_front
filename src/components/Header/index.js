import React from "react";
import * as S from './styles';
import logo from '../../assets/header-logo.png';

function Header() {
    return (
        <S.Container>
            <S.Left>
                <a href="#"><img src={logo} alt="logo header"/></a>
            </S.Left>
            <S.Right>
                <a href="#">HOME</a>
                <span className="pipe">|</span>
                <a href="#">ACERVO</a>
                <span className="pipe">|</span>
                <a href="#">MEUS LIVROS</a>
                <span className="pipe">|</span>
                <a href="#">PERFIL</a>
            </S.Right>
        </S.Container>
    )
}

export default Header;