import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PizzaDough from '../pages/PizzaDough';
import PizzaFlavor from '../pages/PizzaFlavor';
import PizzaSize from '../pages/PizzaSize';
import OrderSummary from '../pages/OrderSummary';
import Checkout from '../pages/Checkout';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pizza-dough" component={PizzaDough} />
    <Route path="/pizza-flavor" component={PizzaFlavor} />
    <Route path="/pizza-size" component={PizzaSize} />
    <Route path="/order-summary" component={OrderSummary} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);

export default Routes;
