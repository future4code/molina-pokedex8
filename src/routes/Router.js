import {BrowserRouter,
    Switch, 
    Route
} from 'react-router-dom';
import React, { useState} from 'react'; 
import Detalhe from './screens/Detalhe';
import Pokedex from './screens/Pokedex';
import Home from './screens/Home';
import Header from './components/Header';



const Router =()=>{
    const [card, setCard] = useState([])

    return 
 <BrowserRouter>
   <Switch>
     <Route exact path="/Detalhe">
       <Detalhe/>
     </Route>
     <Route exact path="/Pokedex">
       <Pokedex/>
     </Route>
     <Route exact path="/">
       <Header/>
       <Home/>
       
     </Route>
   </Switch>

</BrowserRouter>
};

export default Routers;