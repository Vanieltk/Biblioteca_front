import React, { useRef, useState, useEffect } from "react";
import * as S from "./styles";
import abelha from "../../assets/abelha-livro.png";
//componentes
// import Button from '../../components/Button';
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import api from "../../services/api";

function Login(props) {
  const myToast = useRef(null);

  const [formData, setFormData] = useState({});

  function postLoginData() {
    //primeiro parametro a rota, segundo o objeto enviado no body da requisição
    api
      .post("/usuario/login", formData)
      .then((response) => {
        if (response) {
          myToast.current.show({
            severity: "success",
            summary: "Sucesso!",
            detail: "Bem-vindo(a) Beeblioteca",
          });
        }
        props.history.push("/home/admin");
      })
      .catch((err) => {
        if (err) {
          myToast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Usuário não autenticado",
          });
        }
      });
  }

  return (
    <S.Container>
      <Toast ref={myToast} />
      <body></body>
      <S.ContainerRight>
        <div className="area-login">
          <img src={abelha} alt="imagem abelha-livro" />
          <h4>LOGIN</h4>
          <form className="form-login">
            <label>Email:</label>
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  emailaddress: e.target.value,
                });
              }}
              type="text"
            />
            <label>Senha:</label>
            <input
              value={formData.senha}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  senha: e.target.value,
                });
              }}
              type="password"
            />
            <br />
            <div className="div-button-esquerda">
              <Button
                style={{ width: "50%", height: "50%" }}
                icon="pi pi-sign-in"
                iconPos="right"
                className="p-button-raised p-button-rounded"
                label="LOGIN"
                disabled={!formData.emailaddress || !formData.senha}
                onClick={(e) => {
                  e.preventDefault();
                  postLoginData();
                }}
              />
            </div>
            {/* <Link to="/home"> */}
            {/* <button onClick={() => myToast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'})}>Entrar</button> */}
            {/* </Link> */}
            <span className="span-cadastro">
              Não tem cadastro? <a href="#">Cadastre-se</a>
            </span>
          </form>
        </div>
      </S.ContainerRight>
    </S.Container>
  );
}

export default Login;
