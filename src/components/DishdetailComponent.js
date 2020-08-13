import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }
    renderComment(dish){
        if (dish != null){
            const comments= dish.comments;
            return(
                <Card>
                    <CardTitle middle><h4>Comments</h4></CardTitle>
                    <CardBody>
                        <CardText>
                                {comments.map((comment)=>{
                                return(
                                    <li className="list-unstyled">
                                    <ul>
                                        {comment.comment}
                                    </ul>
                                    <ul>
                                        --{comment.author},&nbsp; {comment.date.slice(0,10)}.
                                    </ul>
                                    </li>
                                );
                                })}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }
    render(){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComment(this.props.dish)}
                </div>
            </div>
        );
    }

}
export default Dishdetail;
