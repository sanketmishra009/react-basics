import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Form,FormGroup, Label,Input,Row,Col} from 'reactstrap';

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
        }
        toggleModal(){
            this.setState({
                isModalOpen : !this.state.isModalOpen
            });
        }
        render(){
            return(
                <>
            <Button outline onClick={this.toggleModal}>
                <span className = 'fa fa-pencil fa-lg'></span>Submit Comments</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>SubmitComment</ModalHeader>
                <ModalBody>
                    <LocalForm>
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
