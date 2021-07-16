import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import React, { useState } from "react";
import Detalhe from '../screens/Detalhe';
import Pokedex from '../screens/Pokedex';
import Home from '../screens/Home';
import Header from "../components/Header"


export default function Router() {
  const [listPokedex, setListPokedex] = useState([]) || [];
  const [listHome, setListHome] = useState([]) || [];

  return (
    <BrowserRouter>
    <Header/>
   
      <Switch>
        <Route exact path="/">
          <Home
            listPokedex={listPokedex}
            setListPokedex={setListPokedex}
            listHome={listHome}
            setListHome={setListHome}
          />
        </Route>
        <Route exact path="/details/:id">
          <Detalhe />
        </Route>
        <Route exact path="/pokedex">
          <Pokedex
            listHome={listHome}
            setListHome={setListHome}
            listPokedex={listPokedex}
            setListPokedex={setListPokedex}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}