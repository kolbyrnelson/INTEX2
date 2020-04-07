import React from 'react';
import './App.scss';
// import AppContext from './context';
import * as bs from 'react-bootstrap';
// import PRODUCTS from './products.js';
import CurrencyFormat from 'react-currency-format';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const prod = props.camp

    return (
            <bs.Col md='3' key={prod.campaign_id}>
                <bs.Card border="dark" className="m-3" style={{height:"36em"}}>
                    <Link className='btn btn-outline-info' to={`/details/${prod.campaign_id}`} style={{
                        position:"absolute", 
                        top:0, 
                        right:0, 
                        }}>
                        Details
                    </Link>
                    <bs.Card.Img src={prod.campaign_image_url} style={{height:"400px", width: "100%"}}></bs.Card.Img>
                    <bs.Card.Footer>
                        <bs.Card.Title style={{fontSize:"1.25vw"}}>
                            {prod.title}
                        </bs.Card.Title>
                        <CurrencyFormat value={parseFloat(prod.goal).toFixed(2)} prefix={'$'} displayType={'text'} thousandSeparator={true} renderText={value => <bs.Card.Text>{value}</bs.Card.Text>}/>
                    </bs.Card.Footer>
                </bs.Card>
            </bs.Col>
            )
}