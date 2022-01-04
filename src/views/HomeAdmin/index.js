import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import colmeia from '../../assets/colmeia-adm.png';
import * as S from './styles';
import { Button } from "../../components/Button/styles";
import { Link } from "react-router-dom";
import Hexagon from 'react-hexagon';

function HomeAdmin() {

  return (
    <S.Container>
      <HeaderAdmin />
      <div className="div-retangulo-superior"><br /></div>
      <S.ConteinerLogo><img src={colmeia} />ADMINISTRADOR</S.ConteinerLogo>
      <S.ConteinerContent>

        <section id="section1">
          <div style={{ width: '65%', marginLeft: '23%' }}>
            <Hexagon
              style={{ fill: '#ecb248', stroke: '#4a0000' }}
              href="/listaremprestimos"
            >
              <text fontSize={50} x="28%" y="50%">LISTAR</text>
              <text fontSize={50} x="7%" y="60%">EMPRÉSTIMO </text>
            </Hexagon>
          </div>

          <div style={{ width: '65%', marginLeft: '5%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/listarreservas"
            >
              <text fontSize={50} x="28%" y="50%">LISTAR</text>
              <text fontSize={50} x="15%" y="60%">RESERVAS </text>
            </Hexagon>
          </div>

          <div style={{ width: '65%', marginLeft: '-13%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/funcionarios"
            >
              <text fontSize={50} x="28%" y="50%">LISTAR</text>
              <text fontSize={45} x="5%" y="60%">FUNCIONÁRIOS </text>
            </Hexagon>
          </div>

          {/* <Link to={"/listaremprestimos"}><Button>Listar Empréstimos</Button></Link>
          <Link to={"/listarreservas"}><Button>Listar Reservas</Button></Link>
          <Link to={"/funcionarios"}><Button>Funcionários</Button></Link> */}
        </section>
        <section id="section2">

          <div style={{ width: '80%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/obraliteraria"
            >
              <text fontSize={50} x="33%" y="50%">OBRA</text>
              <text fontSize={45} x="19%" y="60%">LITERÁRIA </text>
            </Hexagon>
          </div>

          <div style={{ width: '80%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/obraliteraria"
            >
              <text fontSize={50} x="13%" y="40%">CATEGORIA</text>
              <text fontSize={50} x="33%" y="50%">OBRA</text>
              <text fontSize={50} x="17%" y="60%">LITERÁRIA </text>
            </Hexagon>
          </div>

          <div style={{ width: '80%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/usuario"
            >
              <text fontSize={50} x="19%" y="55%">USUÁRIOS</text>
            </Hexagon>
          </div>
          <div style={{ width: '80%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/categoriausuario"
            >
              <text fontSize={50} x="13%" y="50%">CATEGORIA</text>
              <text fontSize={50} x="17%" y="60%">USUÁRIOS </text>
            </Hexagon>
          </div>


          {/* <Button>Obra Literária</Button>
          <Link to={"/usuarios"}><Button>Usuários</Button></Link>
          <Button>Categoria de Obra Literária</Button>
          <Button>Categoria de Leitor</Button> */}
        </section>

      </S.ConteinerContent>
    </S.Container>

  )
}

export default HomeAdmin;