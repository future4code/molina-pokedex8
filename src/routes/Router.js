import {BrowserRouter,
    Switch, 
    Route
} from 'react-router-dom';
import React  from 'react'; 
import Detalhe from '../screens/Detalhe';
import Pokedex from '../screens/Pokedex';
import Home from '../screens/Home';




const Router =()=>{
   

    return (
 <BrowserRouter>
   <Switch>
     <Route exact path="/Detalhe">
       <Detalhe/>
     </Route>
     <Route exact path="/Pokedex">
       <Pokedex/>
     </Route>
     <Route exact path="/">
      <Home/>
       
     </Route>
   </Switch>
</BrowserRouter>
    )
};

export default Router;