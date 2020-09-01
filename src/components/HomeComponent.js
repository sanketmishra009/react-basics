import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderCard = ({item, isLoading, errmsg}) =>{
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errmsg) {
        return(
                <h4>{errmsg}</h4>
        );
    }
    else
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle><h1>{item.name}</h1></CardTitle>
                    {item.designation ? <CardSubtitle><h2>{item.designation},</h2></CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}
function Home(props){
    return(
        <div className="container">
            <div className='row align-items-start'>
                <div className='col-sm col-md m-1'>
                    <RenderCard item= {props.dish} isLoading={props.isLoading} errmsg = {props.errmsg} />
                </div>
                <div className='col-sm col-md m-1'>
                    <RenderCard item= {props.promotion} isLoading={props.promoLoading} errmsg = {props.promoErrmsg}/>
                </div>
                <div className='col-sm col-md m-1'>
                    <RenderCard item= {props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;