import React from 'react';
import AppContext from './context';
import './App.scss';
import * as bs from 'react-bootstrap';
import ProductCard from './productCard';

// import CAMPAINS from './campains_small.js'

export default function Home(props) {
    const context = React.useContext(AppContext)
    const numOfCamp =  context.showCount

    return (
        <bs.Container fluid className="text-center">
            <h3 className="mt-2" style={{color:"#00b964"}}>Welcome to Arctic Retailer</h3>
            <h6 style={{color:"#00b964"}}><i>"Our Products Will Put You on Top of the World"</i></h6>
            <bs.Row>
                {/* {numOfCamp.map((prod) => { */}
                {context.campaign.slice(0, numOfCamp).map((prod) => {
                return (
                    <ProductCard camp={prod} key={prod.campaign_id}/>
                )
                })}
            </bs.Row>
         <bs.Button className="m-2" style={{backgroundColor:"#00b964", borderColor: "white"}} onClick= {e=>{
                    context.loadMoreCamp(true);
                }}>Show More Campaigns</bs.Button>
        <br></br>
        <i class="fas fa-chevron-down fa-lg"></i>
        </bs.Container>
)
}