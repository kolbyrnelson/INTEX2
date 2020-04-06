import React from 'react';
import './App.scss';
// import AppContext from './context';
import * as bs from 'react-bootstrap';
// import PRODUCTS from './products.js';
import CurrencyFormat from 'react-currency-format';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const prod = props.product

    return (
            <bs.Col md='3' key={prod.id}>
                <bs.Card border="dark" className="m-3">
                    <Link className='btn btn-outline-info' to={`/details/${prod.id}`} style={{
                        position:"absolute", 
                        top:0, 
                        right:0, 
                        }}>
                        Details
                    </Link>
                    <bs.Card.Img src={`../Images/${prod.filename}-1.png`}></bs.Card.Img>
                    <bs.Card.Footer>
                        <bs.Card.Title style={{fontSize:"1.25vw"}}>
                            {prod.name}
                        </bs.Card.Title>
                        <CurrencyFormat value={parseFloat(prod.price).toFixed(2)} prefix={'$'} displayType={'text'} thousandSeparator={true} renderText={value => <bs.Card.Text>{value}</bs.Card.Text>}/>
                    </bs.Card.Footer>
                </bs.Card>
            </bs.Col>
            )
}