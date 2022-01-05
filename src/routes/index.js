import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//imports das views que deverão ter rotas

import Login from '../views/Login';
import Home from '../views/Home';
import Acervo from "../views/Acervo";
import HomeAdmin from '../views/HomeAdmin';
import Perfil from '../views/Perfil';
import CadastroUsuario from "../views/CadastroUsuario";
import Funcionarios from "../views/Funcionarios";
import ListarEmprestimos from "../views/ListarEmprestimos";
import ListarReservas from "../views/ListarReservas";
import Usuarios from "../views/Usuarios"
import CadastroObra from "../views/CadastroObra";


export default function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" exact component={Home}/> 
                <Route path="/homeadmin" exact component={HomeAdmin}/>  
                <Route path="/acervo" exact component={Acervo}/>
                <Route path="/perfil" exact component={Perfil}/>
                <Route path="/cadastrousuario" exact component={CadastroUsuario}/> 
                <Route path="/funcionarios" exact component={Funcionarios}/> 
                <Route path="/listaremprestimos" exact component={ListarEmprestimos}/> 
                <Route path="/listarreservas" exact component={ListarReservas}/> 
                <Route path="/usuarios" exact component={Usuarios}/>
                <Route path="/cadastrousuario" exact component={CadastroUsuario}/>  
                <Route path="/cadastroobra" exact component={CadastroObra}/>  
            </Switch>
        </BrowserRouter>
    )
}

