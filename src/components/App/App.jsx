import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';;

// Components
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';
import SelectPizza from '../SelectPizza/SelectPizza'


function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getPizzas();
  }, []);
    
  const getPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      console.log('response is', response);
      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      })
      history.push('/home');
    }).catch(err => {
      console.error('GET /api/pizza failed', err);
    })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div id="prime"><h1 className='App-title'>Prime Pizza</h1></div>
        <div id="total"><p>Total: $</p></div>
      </header>

      <Router>
        <div>
          <div className="nav">
            <Route path="/home" component={SelectPizza}></Route>
            <Route path="/CustomerForm" component={CustomerForm}></Route>
            <Route path="/Checkout" component={Checkout}></Route>
          </div>
        </div>
      </Router>


    </div>
  );
}

export default App;
