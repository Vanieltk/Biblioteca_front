import React from "react";
import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import { FileUpload } from "primereact/fileupload";

import { InputText } from "primereact/inputtext";
import { useState, useEffect } from "react";
import Button from "../../components/Button";

function CadastroObra() {
  const [Categorias, setCategorias] = useState();
  const [Categoria, setCategoria] = useState();

  const [formData, setFormData] = useState({});
  return (
    <S.Conteiner>
      <HeaderAdmin />
      <S.ConteinerCenter>
        <div className="titulo">
          <h3>CADASTRO DE OBRA LITERÁRIA</h3>
        </div>
      </S.ConteinerCenter>
      <S.ConteinerContent>
        <div className="leftside">
          <FileUpload
            className="upload"
            name="capa"
            url="src\assets\capas"
          ></FileUpload>
          <div className="buttonCadastrarContainer">
            <Button name="CADASTRAR"></Button>
          </div>
        </div>
        <div className="rightside">
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
            <label htmlFor="in">Nome da obra:</label>
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
            <label htmlFor="in">Autor:</label>
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
            <label htmlFor="in">Editora:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  numero: e.target.value,
                });
              }}
              className="descricao"
            />
            <label htmlFor="in">Descrição:</label>
          </span>
        </div>
      </S.ConteinerContent>
    </S.Conteiner>
  );
}
export default CadastroObra;
