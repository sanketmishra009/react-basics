import React from 'react';
import logo from './logo.svg';
import {Navbar ,NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Some mofo's restaurant.</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
