import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import colmeia from '../../assets/colmeia-adm.png';
import * as S from './styles';
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
              href="/fazeremprestimos"
            >
              <text fontSize={50} x="28%" y="50%">FAZER</text>
              <text fontSize={50} x="7%" y="60%">EMPRÉSTIMO </text>
            </Hexagon>
          </div>

          <div style={{ width: '65%', marginLeft: '5%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/fazerreserva"
            >
              <text fontSize={50} x="28%" y="50%">FAZER</text>
              <text fontSize={50} x="15%" y="60%">RESERVAS </text>
            </Hexagon>
          </div>

          <div style={{ width: '65%', marginLeft: '-13%' }}>
            <Hexagon
              style={{ flex: 1, fill: '#ecb248', stroke: '#4a0000' }}
              href="/cadastrousuario"
            >
              <text fontSize={50} x="10%" y="50%">CADASTRAR</text>
              <text fontSize={45} x="23%" y="60%">USUÁRIO</text>
            </Hexagon>
          </div>

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
              href="/usuarios"
            >
              <text fontSize={50} x="30%" y="50%">LISTAR</text>
              <text fontSize={50} x="19%" y="60%">USUÁRIOS</text>
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
        </section>

      </S.ConteinerContent>
    </S.Container>

  )
}

export default HomeAdmin;