import React from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <SelectPizza />
  
    </div>
  );
}

export default App;
