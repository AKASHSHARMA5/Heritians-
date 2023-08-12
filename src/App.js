//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<div id='formss'>
            <div className="container my-5">
              <Form />
            </div>
          </div>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
