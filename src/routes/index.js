import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//imports das views que deverão ter rotas

import Login from '../views/Login';
import Home from '../views/Home';
import Acervo from "../views/Acervo";
import HomeAdmin from '../views/HomeAdmin';
import Perfil from '../views/Perfil';
import CadastroUsuario from "../views/CadastroUsuario";
import CategoriaLeitor from "../views/CategoriaLeitor";

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
                <Route path="/categorialeitor" exact component={CategoriaLeitor}/>
            </Switch>
        </BrowserRouter>
    )
}

