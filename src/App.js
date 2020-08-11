import React ,{Component} from 'react';
import {Navbar ,NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent";
import './App.css';
import {DISHES} from './shared/dishes'
import { render } from '@testing-library/react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={dishes:DISHES};
  };

  render() {
    return (
      <div className="App">
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Some mofo's restaurant.</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}
export default App;
