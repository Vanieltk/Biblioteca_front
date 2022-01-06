import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";

import Button from "../../components/Button";
import api from "../../services/api";

import { useState, useEffect } from "react";

import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function FazerEmprestimos() {
  const [Categorias, setCategorias] = useState({});
  const [Categoria, setCategoria] = useState({});
  const [formData, setFormData] = useState({});

  function getDataAxios() {
    api.get("/usuario/filter/all").then((response) => console.log(response));
  }

  function postData() {
    //primeiro parametro a rota, segundo o objeto enviado no body da requisição
    api.post("/usuario", formData).then((response) => console.log(response));
  }

  return (
    <S.Container>
      <HeaderAdmin />
      <S.CenterContainer>
        <h1>EMPRÉSTIMO</h1>
        <div className="cadastro">
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  leitor: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Nome do leitor:</label>
          </span>
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  ObraLiteraria: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Nome da Obra Literaria:</label>
          </span>

          <Dropdown
            id="drop"
            value={Categoria}
            options={Categorias}
            placeholder="Categoria da Obra Literária"
          />

          <span className="p-float-label">
            <InputMask
              value={formData.data_emprestimo}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data_emprestimo: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Data de emprestimo:</label>
          </span>
          <span className="p-float-label">
            <InputMask
              value={formData.data_devolucao}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data_devolucao: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Data de Devolução:</label>
          </span>
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  funcionario: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Funcionário:</label>
          </span>
        </div>
        <div className="div-buttons">
          <Link to="#">
            <Button name="Fazer Emprestimo"></Button>
          </Link>
          <Link to="/home/admin">
            <Button name="VOLTAR"></Button>
          </Link>
        </div>
      </S.CenterContainer>
    </S.Container>
  );
}

export default FazerEmprestimos;
