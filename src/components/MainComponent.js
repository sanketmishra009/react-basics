import React ,{Component} from 'react';
import Menu from "./MenuComponent";
import {DISHES} from '../shared/dishes'
import { render } from '@testing-library/react';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom'; 

class Main extends Component{
  constructor(props){
    super(props);
    this.state={dishes:DISHES
    };
  };
  render() {
    const Homepage = ()=>{
      return (
        <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={()=><Home/>}/>
          <Route exact path = '/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;
