import React, {Component} from 'react';
import Navigator from './component/navigator/Navigator';
import Store from './component/store/Store';
import Order from './component/order/Order';
import AddProduct from './component/addProduct/AddProduct';
import Footer from './component/footer/Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigator />
          <Switch>
            <Route exact path="/" component={Store} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/addproduct" component={AddProduct} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
