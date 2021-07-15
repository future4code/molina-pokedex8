import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-image: #F8F4F9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const ButtonContainer = styled.div `
  display: flex;
justify-content: center;
gap:50px;
margin: 30px;
`

const Button = styled.button `
  grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}
`

const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImgPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 400px;
`

const ContainerDetails = styled.div`
  display: flex;
`

function Detalhe() {
  const [detailsPokemon, setDetailsPokemon] = useState(undefined);

  const pathParams = useParams();
  const id = pathParams.id;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setDetailsPokemon(response.data);
    });
  };

  return (
    <Container>
      {detailsPokemon && (
        <ContainerDetails>
          <ImgPokemon>
            <img src={detailsPokemon.sprites.front_default} width="200px;" height="200px;" />
            <img src={detailsPokemon.sprites.back_default}  width="200px;" height="200px;" />
          </ImgPokemon>
    
          <ContainerImg>
          <h1>{detailsPokemon.name}</h1>
          <h2>PODERES</h2>

          {detailsPokemon.types.map((item) => {
            return <p key={item.name}>{item.type.name}</p>;
          })}
          {detailsPokemon.stats.map((item) => {
            return (
              <p>
                {item.stat.name}: {item.base_stat}
              </p>
            );
          })}

          {detailsPokemon.abilities.map((item) => {
            return <p>{item.name}</p>;
          })}
          
         {/*{detailsPokemon.moves.map((item) => {
            return <p>{item.move.name}</p>;
          })} */}
          </ContainerImg>
        </ContainerDetails>
      )}
    <ButtonContainer>
      <Link to="/">
        <Button>Ir para Home</Button>
      </Link>
      <Link to="/pokedex">
        <Button>Voltar para pokedex</Button>
      </Link>
    </ButtonContainer>
    </Container>
  );
}

export default Detalhe

