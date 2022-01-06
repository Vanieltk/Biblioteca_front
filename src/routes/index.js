import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//imports das views que deverão ter rotas

import Login from "../views/Login";
import Home from "../views/Home";
import Acervo from "../views/Acervo";
import HomeAdmin from "../views/HomeAdmin";
import Perfil from "../views/Perfil";
import CadastroUsuario from "../views/CadastroUsuario";
import Funcionarios from "../views/Funcionarios";
import FazerEmprestimos from "../views/FazerEmprestimos";
import FazerReserva from "../views/FazerReserva";
import ListarReservas from "../views/ListarReservas";
import ListarUsuarios from "../views/ListarUsuarios";
import CadastroObra from "../views/CadastroObra";

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/home/admin" exact component={HomeAdmin} />
        <Route path="/acervo" exact component={Acervo} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/usuario/cadastrar" exact component={CadastroUsuario} />
        <Route path="/funcionarios" exact component={Funcionarios} />
        <Route path="/fazeremprestimos" exact component={FazerEmprestimos} />
        <Route path="/fazerreserva" exact component={FazerReserva} />
        <Route path="/listarreservas" exact component={ListarReservas} />
        <Route path="/usuario/listar" exact component={ListarUsuarios} />
        <Route path="/obra/cadastrar" exact component={CadastroObra} />
      </Switch>
    </BrowserRouter>
  );
}
