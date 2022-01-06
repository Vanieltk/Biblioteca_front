import * as S from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

import api from "../../services/api";

import { useState, useRef, useEffect } from "react";

import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function FazerReserva(props) {
  const [CategoriasObra, setCategoriasObra] = useState({});
  const [CategoriaObra, setCategoriaObra] = useState({});

  const [Categorias, setCategorias] = useState({});
  const [Categoria, setCategoria] = useState({});

  const [formData, setFormData] = useState({});

  const myToast = useRef(null);

  useEffect(() => {
    getUsuarioCategorias();
    getCategoriaObras();
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

  function postReservaData() {
    //primeiro parametro a rota, segundo o objeto enviado no body da requisição
    api.post("/Reserva", formData).then((response) => {
      if (response.status === 200) {
        myToast.current.show({
          severity: "success",
          summary: "Sucesso!",
          detail: "Reserva feita com sucesso!",
        });
      }
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
        <h1>RESERVA</h1>
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

          <Dropdown
            id="drop"
            value={Categoria}
            options={Categorias}
            placeholder="Categoria do Leitor"
            onChange={(e) => {
              setCategoria(e.value);
              setFormData({
                ...formData,
                idCategoriaUsuario: e.value,
              });
            }}
          />

          <span className="p-float-label">
            <InputText
              onChange={(e) => {
                setFormData({
                  ...formData,
                  obra_literaria: e.target.value,
                });
              }}
              className="in"
            />
            <label htmlFor="in">Nome da Obra Literaria:</label>
          </span>

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
              value={formData.data_prevista_retirada}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data_prevista_retirada: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Data da retirada:</label>
          </span>
          <span className="p-float-label">
            <InputMask
              value={formData.data_prevista_devolucao}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data_prevista_devolucao: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Data de Devolução:</label>
          </span>
          <span className="p-float-label">
            <InputMask
              value={formData.data_reserva}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data_reserva: e.target.value,
                });
              }}
              mask="99/99/9999"
              className="in"
            ></InputMask>
            <label htmlFor="in">Data da Reserva:</label>
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
              postReservaData();
            }}
            style={{ width: "250px" }}
            icon="pi pi-check"
            iconPos="right"
            className="p-button-raised p-button-rounded"
            label="CADASTRAR"
            disabled={
              !formData.leitor ||
              !formData.idCategoriaUsuario ||
              !formData.obra_literaria ||
              !formData.idCategoriaObra ||
              !formData.data_prevista_retirada ||
              !formData.data_prevista_devolucao ||
              !formData.data_reserva ||
              !formData.funcionario
              
              
            }
          />
        
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
      </S.CenterContainer>
    </S.Container>
  );
}

export default FazerReserva;
