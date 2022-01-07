import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import * as S from "./styles";
// import Button from '../../components/Button';
import api from "../../services/api";
import HeaderAdmin from "../../components/HeaderAdmin";

import { useState, useRef, useEffect } from "react";

function CadastroUsuario(props) {
  const [Categorias, setCategorias] = useState();
  const [Categoria, setCategoria] = useState();

  const [formData, setFormData] = useState({});

  const myToast = useRef(null);

  useEffect(() => {
    getUsuarioCategorias();
  }, []);

  function getUsuarioCategorias(props) {
    api.get("/CategoriaUsuario/filter/all").then((response) => {
      const categoriasUsuario = response.data.map((categoriaUsuario) => {
        return {
          label: categoriaUsuario.nome_categoria_usuario,
          value: categoriaUsuario._id,
        };
      });
      setCategorias(categoriasUsuario);
    });
  }

  function postUsuarioData() {
    //primeiro parametro a rota, segundo o objeto enviado no body da requisição
    api
      .post("/usuario", formData)
      .then((response) => {
        if (response.status === 200) {
          myToast.current.show({
            severity: "success",
            summary: "Sucesso!",
            detail: "Usuário cadastrado com sucesso!",
          });
        }
      })
      .catch((err) => {
        myToast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Usuário já cadastrado",
        });
      });
  }

  function goBack() {
    props.history.goBack();
  }

  return (
    <S.Container>
      <Toast ref={myToast} />
      <HeaderAdmin />

      <S.CenterContainer>
        <h1>CADASTRO</h1>

        <div className="cadastro-esquerda">
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  nomecompleto: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Nome Completo:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  emailaddress: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">E-mail:</label>
          </span>

          <span className="p-float-label">
            <InputMask
              value={formData.cpf}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  cpf: e.target.value,
                });
              }}
              mask="999.999.999-99"
              className="in"
            ></InputMask>
            <label htmlFor="in">CPF:</label>
          </span>

          <span className="p-float-label">
            <InputMask
              value={formData.telefone}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  telefone: e.target.value,
                });
              }}
              mask="(99) 9 9999-9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Telefone:</label>
          </span>

          <span className="p-float-label">
            <InputMask
              value={formData.datanascimento}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  datanascimento: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Data de Nascimento:</label>
          </span>

          <span className="p-float-label">
            <Password
              style={{ width: "75%" }}
              toggleMask
              onChange={(e) => {
                setFormData({
                  ...formData,
                  senha: e.target.value,
                });
              }}
              feedback={false}
              className="in"
            />
            <label htmlFor="in">Senha:</label>
          </span>
        </div>
        <div className="cadastro-direita">
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  estado: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Estado:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  cidade: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Cidade:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  bairro: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Bairro:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  logradouro: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Logradouro:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  numero: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Número:</label>
          </span>

          <span className="p-float-label">
            <InputMask
              required
              value={formData.cep}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  cep: e.target.value,
                });
              }}
              mask="99999-999"
              className="in"
            ></InputMask>
            <label htmlFor="in">CEP:</label>
          </span>

          <Dropdown
            id="drop"
            style={{ width: "300px" }}
            value={Categoria}
            options={Categorias}
            placeholder="Categoria de Leitor"
            onChange={(e) => {
              setCategoria(e.value);
              setFormData({
                ...formData,
                idCategoriaUsuario: e.value,
              });
            }}
          />
        </div>
        <div className="div-button-esquerda">
          <Button
            onClick={() => {
              goBack();
            }}
            style={{ width: "250px" }}
            icon="pi pi-arrow-left"
            iconPos="left"
            className="p-button-raised p-button-rounded"
            label="VOLTAR"
          />
        </div>
        <div className="div-button-direita">
          <Button
            onClick={() => {
              postUsuarioData();
            }}
            style={{ width: "250px" }}
            icon="pi pi-check"
            iconPos="right"
            className="p-button-raised p-button-rounded"
            label="CADASTRAR"
            disabled={
              !formData.nomecompleto ||
              !formData.emailaddress ||
              !formData.cpf ||
              !formData.telefone ||
              !formData.datanascimento ||
              !formData.senha ||
              !formData.estado ||
              !formData.cidade ||
              !formData.bairro ||
              !formData.logradouro ||
              !formData.numero ||
              !formData.cep ||
              !formData.idCategoriaUsuario
            }
          />
        </div>
      </S.CenterContainer>
    </S.Container>
  );
}

export default CadastroUsuario;
