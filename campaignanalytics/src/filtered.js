import React from 'react';
import AppContext from './context';
import './App.scss';
import * as bs from 'react-bootstrap';
import ProductCard from './productCard';

export default function Filtered(props) {
    const context = React.useContext(AppContext)
    const numOfCamp =  context.showCount

    return (
        <bs.Container fluid className="text-center">
            <h3 className="mt-2">Search Results</h3>
            <bs.Row>
                {context.filteredCampaigns.slice(0, numOfCamp).map((prod) => {
                return (
                    <ProductCard camp={prod} key={prod.campaign_id}/>
                )
                })}
            </bs.Row>
         <bs.Button variant='warning' onClick= {e=>{
                    context.loadMoreCamp(true);
                }}>Show More Campaigns</bs.Button>
        </bs.Container>
)
}