import React from 'react';
import AppContext from './context';
import './App.scss';
import * as bs from 'react-bootstrap';
import ProductCard from './productCard';
import CAMPAINS from './campains_small.js'


export default function Home(props) {

    const context = React.useContext(AppContext);

    return (
        <bs.Container fluid className="text-center">
            <h3 className="mt-2">Welcome to Arctic Retailer</h3>
            <h6><i>"Our Products Will Put You on Top of the World"</i></h6>
            <bs.Row>
                {context.campaign.map((prod) => {
                return (
                    <ProductCard camp={prod} key={prod.campaign_id}/>
                )
                })}
            </bs.Row>
        </bs.Container>
)
}