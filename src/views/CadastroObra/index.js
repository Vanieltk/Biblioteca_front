import React from "react";
import * as S from './styles';
import HeaderAdmin from '../../components/HeaderAdmin';



function CadastroObra(){
    return(
      <S.Conteiner>
          <HeaderAdmin/>
            <S.ConteinerCenter>
              <div className="titulo"><h3>CADASTRO DE OBRA LITERÁRIA</h3></div>
            </S.ConteinerCenter> 
            <S.ConteinerContent>
               <div className="leftside">
                  <input className="upload"></input>
               </div>
               <div className="rightside">
                  <input className="nomeobra"></input>
                  <input className="nomeautor"></input>
                  <input className="editora"></input>
                  <input className="descricao"></input>
               </div>
            </S.ConteinerContent>
      </S.Conteiner> 
    )
  }
  export default CadastroObra;