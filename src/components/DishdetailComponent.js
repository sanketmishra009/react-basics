import React from 'react';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import SubmitComment from './CommentComponent';

    function RenderDish({dish}){
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
    function RenderComment({comments}){
        if (comments != null){
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
                                        --{comment.author},&nbsp; {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}.
                                    </ul>
                                    </li>
                                );
                                })}
                        </CardText>
                        <SubmitComment/>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }
    const Dishdetail= (props)=> {
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                    <h2>{props.dish.name}</h2>
                    <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.comment}/>
                    </div>
                </div>
            </div>
        );
    }
export default Dishdetail;
