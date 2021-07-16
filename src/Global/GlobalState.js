import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/axios";
import { GlobalStateContext } from "./GlobalStateContex";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [image, setImage] = useState([]);

  const getPokemons = () => {
    axios
      .get(`${BASE_URL}/?offset=0&limit=20`)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { pokemons, pokedex, image };
  const setters = { setPokemons, setPokedex, setImage };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;