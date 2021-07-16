import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  margin-left: 200px;
  border: 60px solid red;  
  background-color: black;
  color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 65%;

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
  }, []); /*aqui que vai o pokemon kkkk q eu falei q nao sei onde vai acho */

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
    
    </Container>
  );
}

export default Detalhe

