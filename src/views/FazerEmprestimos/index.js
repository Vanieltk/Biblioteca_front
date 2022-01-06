import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

import api from "../../services/api";

import { useState, useEffect, useRef} from "react";

import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function FazerEmprestimos(props) {
  const [Categorias, setCategorias] = useState({});
  const [Categoria, setCategoria] = useState({});

  const [CategoriasObra, setCategoriasObra] = useState({});
  const [CategoriaObra, setCategoriaObra] = useState({});

  const [formData, setFormData] = useState({});

  const myToast = useRef(null);

  useEffect(() => {
    getCategoriaUsuarios();
    getCategoriaObras();
  }, []);


  function getCategoriaUsuarios(props) {
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

  function getCategoriaObras(props) {
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


  function postEmprestimoData() {
    //primeiro parametro a rota, segundo o objeto enviado no body da requisição
    api.post("/Emprestimo", formData).then((response) => {
      if (response.status === 200) {
        myToast.current.show({
          severity: "success",
          summary: "Sucesso!",
          detail: "Emprestimo feito com sucesso!",
        });
      }
    });
  }

  function goBack() {
    props.history.goBack();
  }

  return (
    <S.Container>
      <HeaderAdmin />
      <Toast ref={myToast} />
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
            placeholder="Categoria do leitor"
            onChange={(e) => {
              setCategoria(e.value);
              setFormData({
                ...formData,
                idCategoriaUsuario: e.value,
              });
            }}
          />

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
              postEmprestimoData();
            }}
            style={{ width: "250px" }}
            icon="pi pi-check"
            iconPos="right"
            className="p-button-raised p-button-rounded"
            label="CADASTRAR"
            disabled={
              !formData.leitor ||
              !formData.ObraLiteraria ||
              !formData.data_emprestimo ||
              !formData.data_devolucao ||
              !formData.idCategoriaUsuario ||
              !formData.idCategoriaObra
            }
          />
        </div>
      </S.CenterContainer>
    </S.Container>
  );
}

export default FazerEmprestimos;
