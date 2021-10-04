import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';


function Inicio() {
  return (
    <Switch className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/series' component={Series} />
      <Route exact path='/movies' component={Movies} />
      <Route path="*" component={Error404} />
    </Switch>
  );
}

export default Inicio;
