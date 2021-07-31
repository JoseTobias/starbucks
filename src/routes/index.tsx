import React from 'react';

import Layout from 'presentation/Layout';
import Home from 'presentation/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Routes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:storeId">
            <div>Cardápio</div>
          </Route>
          <Route path="/cart">
            <div>Carrinho</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
