import React from 'react';

import Layout from 'presentation/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardStore from 'ui/CardStore';

const Routes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <CardStore />
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
