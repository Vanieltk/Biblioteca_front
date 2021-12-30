import React from "react";
import * as S from './styles';
import abelha from '../../assets/abelha-livro.png';
//componentes
import Button from '../../components/Button';

function Login() {
  return (
      <S.Container >
        <body></body>
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
            <button onClick={() => {alert('clicado')}}>Entrar</button>
            <span className="span-cadastro">Não tem cadastro? <a href="#">Cadastre-se</a></span>
          </form>
        </div>
        </S.ContainerRight>
      </S.Container>
  )
    
}

export default Login;
