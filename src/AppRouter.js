// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import MenuPrincipal from './MenuPrincipal';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/menu" component={MenuPrincipal} />
        {/* Adicione outras rotas conforme necessário */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
