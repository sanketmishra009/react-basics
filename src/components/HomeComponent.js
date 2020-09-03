import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './loadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';

const RenderCard = (props) =>{
    if (props.isLoading) {
        return(
                <Loading />
        );
    }
    else if (props.errmsg) {
        return(
                <h4>{props.errmsg}</h4>
        );
    }
    else if(props.item)
    {
        const item = props.item;
        var x = props.item.image;
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={x[0]=="i"?baseUrl+x:x} alt={item.name}/>
                    <CardBody>
                        <CardTitle><h1>{item.name}</h1></CardTitle>
                        {item.designation ? <CardSubtitle><h2>{item.designation},</h2></CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    else{
        return(<div></div>);
    }
}
function Home(props){
    return(
        <div className="container">
            <div className='row align-items-start'>
                <div className='col-sm col-md m-1'>
                    <RenderCard item= {props.dish} isLoading={props.disehsLoading} errmsg = {props.dishesErrmsg} />
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