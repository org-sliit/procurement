import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import update from './components/update.component';
import cart from './components/cart.component';
import view from './components/productview.component';
import cartedit from './components/cartedit.component';
import payment from './components/payment.component';
import finalbill from './components/displaybill.component'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Procuement System</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add Product </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Products Management</Link>
                </li>

                  <li className="nav-item">
                      <Link to={'/cart'} className="nav-link">My Cart</Link>
                  </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/update' component={ Index } />
              <Route path='/cart' component={ cart } />
              <Route path='/view/:id' component={ view } />
              <Route path='/cartedit/:id' component={ cartedit } />
              <Route path='/payment' component={payment } />
              <Route path='/finalbill/:name/:email/:address' component={finalbill } />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
