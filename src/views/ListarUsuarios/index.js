import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import colmeia from "../../assets/colmeia-adm.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useRef, useState, useEffect } from "react";
import api from "../../services/api";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { confirmDialog } from "primereact/confirmdialog";

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const myToast = useRef(null);

  function getUsuariosList() {
    api.get("usuario/filter/all").then((response) => {
      const usuarios = response.data.map((usuario) => {
        return {
          id: usuario._id,
          cpf: usuario.cpf,
          email: usuario.emailaddress,
          nome: usuario.nomecompleto,
          categoria_usuario: usuario.categoria_usuario.nome_categoria_usuario,
          limite_emprestimo: usuario.categoria_usuario.limite_tempo_emprestimo,
        };
      });
      setUsuarios(usuarios);
    });
  }

  function deleteUsuario(idUsuario) {
    api.delete(`usuario/deletar/${idUsuario}`).then((response) => {
      if (response) {
        myToast.current.show({
          severity: "success",
          summary: "Sucesso!",
          detail: `Usuário ${response.data.nomecompleto} removido`,
        });
        getUsuariosList();
      }
    });
  }

  const confirmDelete = (rowData) => {
    confirmDialog({
      message: `Tem certeza que deseja excluir o usuário ${rowData.nome}?`,
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      rejectLabel: "Não",
      acceptLabel: "Sim",
      acceptClassName: "p-button-danger",
      rejectClassName: "p-button-warning",
      reject: () => {
        return;
      },
      accept: () => deleteUsuario(rowData.id),
    });
  };

  const renderAcoes = (rowData) => {
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
          onClick={(e) => console.log(rowData)}
          style={{ marginRight: "5%" }}
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-raised p-button-rounded p-button-danger"
          onClick={() => confirmDelete(rowData)}
          style={{}}
        />
      </div>
    );
  };

  useEffect(() => {
    getUsuariosList();
  }, []);

  return (
    <S.Container>
      <Toast ref={myToast} />

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
            <DataTable
              emptyMessage="Nenhum Usuário cadastrado"
              value={usuarios}
              responsiveLayout="scroll"
            >
              <Column field="nome" header="Nome Completo"></Column>
              <Column field="cpf" header="CPF"></Column>
              <Column field="email" header="E-mail"></Column>
              <Column
                field="limite_emprestimo"
                header="Tempo de Empréstimo"
                style={{ textAlign: "start" }}
              ></Column>
              <Column
                field="categoria_usuario"
                header="Categoria do Usuário"
              ></Column>
              <Column
                body={renderAcoes}
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
