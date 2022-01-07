import React from "react";
import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";
import { Button } from 'primereact/button'
import { Toast } from "primereact/toast";
import { InputMask } from "primereact/inputmask";

import { InputText } from "primereact/inputtext";
import { useState, useEffect, useRef } from "react";
// import Button from "../../components/Button";
import api from "../../services/api";


function CadastroObra(props) {
  const [CategoriasObra, setCategoriasObra] = useState({});
  const [CategoriaObra, setCategoriaObra] = useState({});

  const myToast = useRef(null);

  function getCategoriaObras() {
    api.get("/CategoriaObraLiteraria/filter/all").then((response) => {
      const categoriasObra = response.data.map((categoriaObra) => {
        return {
          label: categoriaObra.nome_categoria_obra_literaria,
          value: categoriaObra._id,
        };
      });
      setCategoriasObra(categoriasObra);
    });
  }

  function goBack() {
    props.history.goBack();
  }

  useEffect(() => {
    getCategoriaObras();
  }, []);

  function postObraLiterariaData() {
    //primeiro parametro a rota, segundo o objeto enviado no body da requisição
    api.post("/ObraLiteraria", formData).then((response) => {
      if (response.status === 200) {
        console.log(response)
        myToast.current.show({
          severity: "success",
          summary: "Sucesso!",
          detail: `Obra Literária ${response.data.titulo} cadastrada com sucesso!`,
        });
      } else {
        myToast.current.show({
          severity: "error",
          summary: "Error!",
          detail: `Não foi possível cadastrar a Obra Literária de título: ${response.data.titulo}!`,
        });
      }
    });
  }

  const [formData, setFormData] = useState({});
  return (
    <S.Conteiner>
      <HeaderAdmin />
      <Toast ref={myToast} />
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
            <Button
              onClick={() => {
                postObraLiterariaData();
              }}
              style={{ width: "250px" }}
              icon="pi pi-check"
              iconPos="right"
              className="p-button-raised p-button-rounded"
              label="CADASTRAR"
              disabled={
                !formData.autor ||
                !formData.titulo ||
                !formData.autor ||
                !formData.idCategoriaObra
              }
            />

          </div>
        </div>
        <div className="rightside">
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  titulo: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Título da Obra:</label>
          </span>

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  autor: e.target.value,
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
                  editora: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Editora:</label>
          </span>

          <span className="p-float-label">
            <Dropdown
              id="drop"
              value={CategoriaObra}
              options={CategoriasObra}
              placeholder="Categoria da Obra Literária"
              onChange={(e) => {
                setCategoriaObra(e.value);
                setFormData({
                  ...formData,
                  idCategoriaObra: e.value,
                });
              }}
            />
          </span>
          <span className="p-float-label">

            <InputMask
              value={formData.data_publicacao}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data_publicacao: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
          <label htmlFor="in">Data de Publicação:</label>

          </span>
          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  descricao_obra_literaria: e.target.value,
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
