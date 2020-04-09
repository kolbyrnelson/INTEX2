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
            <h2 className="mt-2">Search Results</h2>
            <h5><i>Found {context.filteredCampaigns.length} results</i></h5>
            <bs.Row>
                {context.filteredCampaigns.slice(0, numOfCamp).map((prod) => {
                return (
                    <ProductCard camp={prod} key={prod.campaign_id}/>
                )
                })}
            </bs.Row>
         <bs.Button className="m-2" style={{backgroundColor:"#00b964", borderColor: "white"}} onClick= {e=>{
                    context.loadMoreCamp(true);
                }}>Show More Campaigns</bs.Button>
                <br></br>
        <i class="fas fa-chevron-down"></i>
        </bs.Container>
)
}