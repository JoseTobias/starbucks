import React from 'react';

import Layout from 'presentation/Layout';
import Home from 'presentation/pages/Home';
import Menu from 'presentation/pages/Menu';
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
            <Menu />
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
