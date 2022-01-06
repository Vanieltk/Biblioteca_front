import React from "react";
import * as S from './styles';
import logo from '../../assets/header-logo.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <S.Container>
            <S.Left>
                <Link to="/home"><img src={logo} alt="logo header"/></Link>
            </S.Left>
            <S.Right>
                <Link to="/home" >HOME</Link>
                <span className="pipe">|</span>
                <Link to="/home">ACERVO</Link>
                <span className="pipe">|</span>
                <Link href="#">MEUS LIVROS</Link>
                <span className="pipe">|</span>
                <Link to="/perfil">PERFIL</Link>
            </S.Right>
        </S.Container>
    )
}

export default Header;