import React from 'react';
import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
    function RenderMenu({dish,onClick}){
        return(
        <Card key={dish.id} onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}>
            </CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        );
    }
    const Menu = (props)=>{
        const menu = props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 m-1">
                    <RenderMenu dish={dish} onClick={props.onClick}/>
                </div>
            );
        });
        return(
            <div className="container">
                <div className='row'>
                    {menu}
                </div>
            </div>
        );
    }
export default Menu;
