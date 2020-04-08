import React from 'react';
import './App.scss';
// import AppContext from './context';
import * as bs from 'react-bootstrap';
// import PRODUCTS from './products.js';
import CurrencyFormat from 'react-currency-format';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const prod = props.camp
    const now = parseFloat(prod.current_amount)/parseFloat(prod.goal)
    const progressInstance = <bs.ProgressBar now={now} label={`${now}%`}/>

    return (
            <bs.Col md='3' key={prod.campaign_id}>
                <bs.Card border="dark" className="m-3" style={{height:"24em"}}>
                    <Link className='btn btn-outline-info' to={`/details/${prod.campaign_id}`} style={{
                        position:"absolute", 
                        top:0, 
                        right:0, 
                        }}>
                        Details
                    </Link>
                    <bs.Card.Img src={prod.campaign_image_url} style={{height:"16em", width: "100%"}}></bs.Card.Img>
                    <bs.Card.Footer style={{height:"8em", width: "100%"}}>
                        <bs.Card.Title style={
                            {fontSize:"1vw", 
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            width:"100%",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical"}}>
                            {prod.title}
                        </bs.Card.Title>
                        <bs.Card.Text className="mb-0">
                            <CurrencyFormat value={parseFloat(prod.current_amount).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={prod.current_amount}/>
                            &nbsp;Out Of&nbsp;
                            <CurrencyFormat value={parseFloat(prod.goal).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={prod.goal}/>
                        </bs.Card.Text>
                        <bs.Card.Text style={
                            {textOverflow: "ellipsis",
                            overflow: "hidden",
                            width:"100%",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical"}}>
                            City: {prod.location_city}
                        </bs.Card.Text >
                        {progressInstance}
                    </bs.Card.Footer>
                </bs.Card>
            </bs.Col>
            )
}