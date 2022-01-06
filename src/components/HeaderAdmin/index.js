import React from "react";
import * as S from "./styles";
import logo from "../../assets/header-logo.png";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <S.Container>
      <S.Left>
        <a href="#">
          <img src={logo} alt="logo HeaderAdmin" />
        </a>
      </S.Left>
      <S.Right>
        <Link to="/home/admin">HOME</Link>
        <span className="pipe">|</span>
        <Link to="funcionarios">FUNCIONARIOS</Link>
        <span className="pipe">|</span>
        <Link to="/acervo">ACERVO</Link>
        <span className="pipe">|</span>
        <Link to="#">SAIR</Link>
      </S.Right>
    </S.Container>
  );
}

export default HeaderAdmin;
