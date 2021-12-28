import React from "react";
import * as S from './styles';
import abelha from '../../assets/abelha-livro.png';
//componentes
import Button from '../../components/Button';

function Login() {
  return (
      <S.Container >
        <body >
            {/* <h1><span className="span1">BEE</span><span className="span2">BLIOTECA</span></h1>
            <span className="span-logo1">Biblioteca</span>
            <br/>
            <span className="span-logo2">Cadmus</span> */}
        </body>
        <S.ContainerRight>

        <div className="area-login">
          <img src={abelha} alt="imagem abelha-livro"/>
          <h4>LOGIN</h4>
          <form className="form-login">
            <label>Email/CPF:</label>
            <input type="text"/>
            <label>Senha:</label>
            <input type="password"/>
            <br/>
            <Button/>
            <span className="span-cadastro">Não tem cadastro? <a href="#">Cadastre-se</a></span>
          </form>
        </div>
        </S.ContainerRight>
      </S.Container>
  )
    
}

export default Login;
