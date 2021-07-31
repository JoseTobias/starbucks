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
            <CardStore
              city="cidade"
              neighborhood="bairro"
              image="https://www.starbucks.com.br/public/img/icons/starbucks-nav-logo.svg"
              storeId="1"
            />
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
