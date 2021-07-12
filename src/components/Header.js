import React from 'react'
import { useHistory } from 'react-router-dom'


export const Header = () => {
  const history = useHistory();

const goToPokedex = ()=> {
  history.push("/Pokedex");
};

const goToDetalhe = ()=> {
  history.push("/Detalhe");
};

const goToHome = ()=> {
    history.push("/");
  };

return (
    <div>
    <button onClick={goToHome}>Ir para Home</button>
    <button onClick={goToPokedex}>Pokedex</button>
    <button onClick={goToDetalhe}>Detalhe</button>
    </div>
        );
};