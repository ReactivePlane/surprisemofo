import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './Routes/Home/Home'



function App() {
  return (
    <div className="App">
        <Route path="/"  component ={Home}/>
    </div>
  );
}

export default App;
