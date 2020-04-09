import React from 'react';
import './App.scss';
import './index.scss';
import * as bs from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const prod = props.camp
    const now = (parseFloat(prod.current_amount)/parseFloat(prod.goal)*100).toFixed(0)
    const progressInstance = <bs.ProgressBar now={now} label={`${now}%`} style={{  
        backgroundColor: "darkgray",
        color: "#004876",
        position: "absolute",
        bottom:"1em",
        width:"86%"}}/>

    return (
            <bs.Col md='3' key={prod.campaign_id}>
                <bs.Card border="dark" className="m-3" style={{height:"26em"}}>
                    <Link className='btn btn-outline-custom' to={`/details/${prod.campaign_id}`} style={{
                        position:"absolute", 
                        top:0, 
                        right:0, 
                        }}>
                        Details
                    </Link>
                    <bs.Card.Img src={prod.campaign_image_url} style={{height:"16em", width: "100%"}}></bs.Card.Img>
                    <bs.Card.Footer style={{height:"10em", width: "100%"}}>
                        <bs.Card.Title className="mb-1" style={
                            {fontSize:".7vw", 
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            width:"100%",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical"}}>
                            <Link to={`/details/${prod.campaign_id}`} style={{color:"black"}}>{prod.title}</Link>
                        </bs.Card.Title>
                        <bs.Card.Text className="mb-0" style={
                            {position: "absolute",
                            bottom: "4.2em",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            width:"86%",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical"}}>
                            City: {prod.location_city ? prod.location_city : "Not Listed"}
                        </bs.Card.Text >
                        <bs.Card.Text className="mb-1" style={
                            {position: "absolute",
                            bottom: "2.1em",
                            width:"86%",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical"}}>
                            <CurrencyFormat value={parseFloat(prod.current_amount).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={prod.current_amount}/>
                            &nbsp;Out Of&nbsp;
                            <CurrencyFormat value={parseFloat(prod.goal).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={prod.goal}/>
                        </bs.Card.Text>
                        {progressInstance}
                    </bs.Card.Footer>
                </bs.Card>
            </bs.Col>
            )
}