import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';


export const LogoPokemon = styled.img`
    width: 150px;
    margin-left: 30px;
    max-width: 100%;
    width: 200px;
    cursor: pointer;
   
    
`
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #202020;
    justify-content: center;
    background-color: black;
    padding: 10px 0;
    box-shadow: 2px 3px 3px rgba(0,0,0, 0.4);
    margin-bottom: 10px;
    `


const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 530px;

  button {
    height: 50px;
    width: 50%;
  }
`;

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


  const irParaHome = () => {
    history.push('/')
}

return (
    <HeaderContainer>

      <Botoes>
    <button onClick={goToHome}>Ir para Home</button>
    <button onClick={goToPokedex}>Pokedex</button>
    
    </Botoes>
    <LogoPokemon onClick={irParaHome} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' />
    </HeaderContainer>
        );
};

export default Header