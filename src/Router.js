import React from 'react'
import {Switch , Route} from 'react-router-dom'
 import HomePage from './pages/homepage.js';
 import CartPage from './pages/cartpage.js';
import Checkout from './pages/checkoutpage';
import OrdersPage from './pages/orderspage';

const Router = () => (
  <Switch>
    <Route exact path="/" component = {HomePage} />
    <Route exact path="/cart" component = {CartPage} />
    <Route exact path="/checkout" component = {Checkout} />
    <Route exact path="/orders/:id" component = {OrdersPage} />
  </Switch>
)

export default Router;
