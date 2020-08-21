import React ,{Component} from 'react';
import Menu from "./MenuComponent";
//data imports from shared directory.
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';
//end of data exports.
import { render } from '@testing-library/react';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect} from 'react-router-dom'; 

class Main extends Component{
  constructor(props){
    super(props);
    this.state={dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
    };
  };
  render() {
    const Homepage = ()=>{
      return (
        <Home dish={this.state.dishes.filter((dish)=> dish.featured )[0]}
        promotion={this.state.promotions.filter((promotion)=> promotion.featured )[0]}
        leader={this.state.leaders.filter((leader)=> leader.featured )[0]}/>
      );
    }
    const Dishwithid = ({match}) => {
      return(
      <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
      comment= {this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={()=>Homepage()}/>
          <Route path='/aboutus' component={()=><About leaders={this.state.leaders}/>}/>
          <Route exact path = '/menu' component={() => <Menu dishes={this.state.dishes}/>}/>
          <Route path='/menu/:dishId' component={Dishwithid}/>
          <Route exact path ='/contact' component={Contact}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;
