import React ,{Component} from 'react';
import {Navbar ,NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
import {DISHES} from '../shared/dishes'
import { render } from '@testing-library/react';
import Dishdetail from './DishdetailComponent';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={dishes:DISHES,
    selectDish:null
    };
  };
  onDishSelect(dishId){
    this.setState({selectDish:dishId});
    }
  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">Some mofo's restaurant.</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectDish)[0]}/>
      </div>
    );
  }
}
export default Main;
