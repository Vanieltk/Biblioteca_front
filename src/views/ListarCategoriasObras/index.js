import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import colmeia from "../../assets/colmeia-adm.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Button } from "primereact/button";

function ListarCategoriasObra() {
  const [categorias, setCategorias] = useState([]);

  function getCategoriasObraList() {
    api.get("CategoriaObraLiteraria/filter/all").then((response) => {
      const categoriasObras = response.data.map((categorias) => {
        return {
          id: categorias._id,
          prazo: categorias.prazo_emprestimo,
          nome: categorias.nome_categoria_obra_literaria,
          taxa: categorias.taxa_diaria
        };
      });
      setCategorias(categoriasObras);
    });
  }

  function renderAcoes() {
    return (
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          textAlign: "initial",
          flexFlow: "row",
        }}
      >
        <Button
          type="button"
          icon="pi pi-user-edit"
          className="p-button-raised p-button-rounded p-button-success"
          onClick={(e) => console.log(e)}
          style={{ marginRight: "5%" }}
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-raised p-button-rounded p-button-danger"
          onClick={(e) => console.log(e)}
          style={{}}
        />
      </div>
    );
  }

  useEffect(() => {
    getCategoriasObraList();
  }, []);

  return (
    <S.Container>
      <HeaderAdmin />
      <div className="div-retangulo-superior">
        <br />
      </div>
      <S.ConteinerLogo>
        <img src={colmeia} alt="Imagem Colmeia" />
        CATEGORIAS DE OBRAS
      </S.ConteinerLogo>
      <S.ConteinerContent>
        <div>
          <div className="card">
            <DataTable value={categorias} responsiveLayout="scroll">
              <Column field="nome" header="Categorias de Obras Literárias"></Column>
              <Column field="prazo" header="Prazo em Dias"></Column>
              <Column field="taxa" header="Taxa Diária em Reais"></Column>
              <Column
                body={renderAcoes(categorias)}
                header="Actions"
                style={{ width: "8em" }}
              />
            </DataTable>
          </div>
        </div>
      </S.ConteinerContent>
    </S.Container>
  );
}

export default ListarCategoriasObra;
