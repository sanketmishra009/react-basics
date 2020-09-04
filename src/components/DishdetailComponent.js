import React,{Component} from 'react';
import {Card, CardImg,CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Modal, ModalHeader, ModalBody,Label,Row,Col} from 'reactstrap';
import {Loading} from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';


    function RenderDish(props){
        if (props.dish != null){
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            );
        }
        else{
            return(<div></div>);
        }
    }
    function RenderComment({comments, postComment, dishId}){
        if (comments != null){
            return(
                <Card>
                    <CardTitle className='item-aling-center'><h4>Comments:</h4></CardTitle>
                    <CardBody>
                        <CardText>
                            <Stagger in>
                            {comments.map((comment)=>{
                                return(
                                    <Fade>
                                        <li className="list-unstyled">
                                            <ul>
                                                {comment.comment}
                                            </ul>
                                            <ul>
                                                --{comment.author},&nbsp; {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}.
                                            </ul>
                                        </li>
                                    </Fade>
                                );
                                })}
                            </Stagger>
                        </CardText>
                        <SubmitComment postComment={postComment} dishId={dishId}/>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(<div></div>);
        }
    }
    const Dishdetail= (props)=> {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMsg) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else{
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
                            <RenderDish dish={props.dish} isLoading={props.isLoading} errmsg = {props.errmsg} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComment comments={props.comment} postComment={props.postComment} dishId={props.dish.id}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    class SubmitComment extends Component{
        constructor(props){
            super(props);
            this.state={
                isModalOpen : false
            }
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggleModal(){
            this.setState({
                isModalOpen : !this.state.isModalOpen
            });
        }
        handleSubmit(values){
            this.props.postComment(this.props.dishId,values.rating, values.yourname, values.comment);
        }
        render(){
            return(
                <>
            <Button outline onClick={this.toggleModal}>
                <span className = 'fa fa-pencil fa-lg'></span>Submit Comments</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>SubmitComment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit = {(values) => this.handleSubmit(values) }>
                        <Row className='form-group'>
                            <Col>
                                <Label>Rating:</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>
                                <Label htmlFor='yourname'>Your Name:</Label>
                                <Control.text model='.yourname' id='yourname' placeholder = 'Your Name' className='form-control' 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}  />
                                <Errors
                                            className="text-danger"
                                            model=".yourname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                         />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col>
                                <Label htmlFor='comment'>Comment:</Label>
                                <Control.textarea model='.comment' id='comment' name='comment' className='form-control' rows='6'ß/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type='submit' color='primary'>Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
            );
        }
    }
export default Dishdetail;
