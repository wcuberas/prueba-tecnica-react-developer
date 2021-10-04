import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './Inicio';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Store from './Store/Store';



ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

