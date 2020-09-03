import React ,{Component} from 'react';
import Menu from "./MenuComponent";
import {postComment, fetchDishes, fetchPromos, fetchComments} from '../redux/ActionCreators';
import { render } from '@testing-library/react';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {actions} from 'react-redux-form'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const mapStateToProps = state => {
  return {
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotions:state.promotions
  }
}
const mapDispatchToProps = dispatch =>({
  postComment:(dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: ()=> {dispatch(fetchDishes())},
  fetchComments: ()=> {dispatch(fetchComments())},
  fetchPromos: ()=> {dispatch(fetchPromos())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});


class Main extends Component{
  componentDidMount(){
    this.props.fetchDishes(); 
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  constructor(props){
    super(props);
  };
  render() {
    const Homepage = ()=>{
      return (
        <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrmsg={this.props.dishes.errmsg}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrmsg={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const Dishwithid = ({match}) => {
      return(
        <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errmsg={this.props.dishes.errMess}
        comment={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
      />
      );
    }
    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key ={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path='/home' component={()=>Homepage()}/>
              <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/>
              <Route exact path = '/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
              <Route path='/menu/:dishId' component={Dishwithid}/>
              <Route exact path ='/contact' component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
              <Redirect to='/home'/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
