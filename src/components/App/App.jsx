import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';
import SelectPizza from '../SelectPizza/SelectPizza'


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <SelectPizza />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

     
      <Router>
        <div>
          <div className="nav">
            <Route path="/CustomerForm" component={CustomerForm}></Route>
            <Route path="/Checkout" component={Checkout}></Route>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;
