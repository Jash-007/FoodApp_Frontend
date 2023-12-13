
import './App.css';

import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Router';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
