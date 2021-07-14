import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const CardPerfil = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 250px;
  width: 230px;
  background-color: red;
`;

const Imagem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 230px;
  background-color: black;
`;

const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 230px;

  button {
    height: 50px;
    width: 50%;
  }
`;

const Home = () => {

  const onClickAdicionar = () => {
    console.log("Adicionou");
  };

  const onClickIrParaDetalhes = () => {
    console.log("Foi para detalhes");
  };


  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" />
      <div className="cards">
        <CardPerfil>
          <Imagem />
          <Botoes>
            <button onClick={onClickAdicionar}>Adicionar</button>
            <button onClick={onClickIrParaDetalhes}>Ver detal.</button>
          </Botoes>
        </CardPerfil>

        <CardPerfil>
          <Imagem />
          <Botoes>
            <button onClick={onClickAdicionar}>Adicionar</button>
            <button onClick={onClickIrParaDetalhes}>Ver detal.</button>
          </Botoes>
        </CardPerfil>
        <CardPerfil>
          <Imagem />
          <Botoes>
            <button onClick={onClickAdicionar}>Adicionar</button>
            <button onClick={onClickIrParaDetalhes}>Ver detal.</button>
          </Botoes>
        </CardPerfil>
        <CardPerfil>
          <Imagem />
          <Botoes>
            <button onClick={onClickAdicionar}>Adicionar</button>
            <button onClick={onClickIrParaDetalhes}>Ver detal.</button>
          </Botoes>
        </CardPerfil>
        <CardPerfil>
          <Imagem />
          <Botoes>
            <button onClick={onClickAdicionar}>Adicionar</button>
            <button onClick={onClickIrParaDetalhes}>Ver detal.</button>
          </Botoes>
        </CardPerfil>
      </div>
    </div>
  )
}

export default Home