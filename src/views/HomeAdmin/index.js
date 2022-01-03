import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import colmeia from '../../assets/colmeia-adm.png';
import * as S from './styles';
import { Button } from "../../components/Button/styles";
import { Link } from "react-router-dom";


function HomeAdmin(){
   
    return(
      <S.Container>
        <HeaderAdmin/>
        <div className="div-retangulo-superior"><br/></div>
        <S.ConteinerLogo><img src={colmeia}/>Administrador</S.ConteinerLogo>
        <S.ConteinerContent>
         <section id="section1">
          <Link to={"/listaremprestimos"}><Button>Listar Empréstimos</Button></Link>
          <Link to={"/listarreservas"}><Button>Listar Reservas</Button></Link>
          <Link to={"/funcionarios"}><Button>Funcionários</Button></Link>
          </section>
          <section id="section2">
          <Button>Obra Literaria</Button>
          <Link to={"/usuarios"}><Button>Usuários</Button></Link>
          <Button>Categoria de obra literária</Button>
          <Button>Categoria de Leitor</Button>
          </section>
           
        </S.ConteinerContent>
    </S.Container>       
    
  )}

export default HomeAdmin;