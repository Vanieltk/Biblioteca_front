import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//imports das views que deverão ter rotas

import Login from '../views/Login';
import Home from '../views/Home';

export default function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" exact component={Home}/>  
            </Switch>
        </BrowserRouter>
    )
}

