import React ,{Component} from 'react';
import Menu from "./MenuComponent";

import { render } from '@testing-library/react';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotions:state.promotions
  }
}

class Main extends Component{
  constructor(props){
    super(props);
  };
  render() {
    const Homepage = ()=>{
      return (
        <Home dish={this.props.dishes.filter((dish)=> dish.featured )[0]}
        promotion={this.props.promotions.filter((promotion)=> promotion.featured )[0]}
        leader={this.props.leaders.filter((leader)=> leader.featured )[0]}/>
      );
    }
    const Dishwithid = ({match}) => {
      return(
      <Dishdetail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
      comment= {this.props.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId,10))}/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={()=>Homepage()}/>
          <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/>
          <Route exact path = '/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
          <Route path='/menu/:dishId' component={Dishwithid}/>
          <Route exact path ='/contact' component={Contact}/>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
