import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form,FormGroup, Label,Input,Row,Col} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
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

export default SubmitComment;