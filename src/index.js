import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {BrowserRouter,Switch , Route} from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  /*
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  */
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>  
      <Route path="/cadastro/video" component={CadastroVideo} exact/>  
      <Route path="/cadastro/Categoria" component={CadastroCategoria} exact/> 
      <Route component={() => (<div> Página 404</div>) } exact/>  
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);
