import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import colmeia from "../../assets/colmeia-adm.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Button } from "primereact/button";

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  function getUsuariosList() {
    api.get("usuario/filter/all").then((response) => {
      const usuarios = response.data.map((usuario) => {
        return {
          id: usuario._id,
          cpf: usuario.cpf,
          email: usuario.emailaddress,
          nome: usuario.nomecompleto,
        };
      });
      setUsuarios(usuarios);
    });
  }

  function renderAcoes(user) {
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
    getUsuariosList();
  }, []);

  return (
    <S.Container>
      <HeaderAdmin />
      <div className="div-retangulo-superior">
        <br />
      </div>
      <S.ConteinerLogo>
        <img src={colmeia} alt="Imagem Colmeia" />
        LISTAR USUÁRIOS
      </S.ConteinerLogo>
      <S.ConteinerContent>
        <div>
          <div className="card">
            <DataTable value={usuarios} responsiveLayout="scroll">
              <Column field="nome" header="Nome Completo"></Column>
              <Column field="cpf" header="CPF"></Column>
              <Column field="email" header="E-mail"></Column>
              <Column
                body={renderAcoes(usuarios)}
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

export default ListarUsuarios;
