import React from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, []);
    
  const getPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      dispatch({
        type: 'SET_PIZZA_LIST',
        payload: response.data
      })
    }).catch(err => {
      console.error('GET /api/pizza failed', err);
    })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <SelectPizza 
      
      />
  
    </div>
  );
}

export default App;
