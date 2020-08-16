import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
const RenderCard = ({item}) =>{
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
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
                    <RenderCard item= {props.dish}/>
                </div>
                <div className='col-sm col-md m-1'>
                    <RenderCard item= {props.promotion}/>
                </div>
                <div className='col-sm col-md m-1'>
                    <RenderCard item= {props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;