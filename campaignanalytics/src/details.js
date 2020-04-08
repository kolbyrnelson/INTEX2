import React from 'react';
import './App.scss';
import AppContext from './context';
import * as bs from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { useRouteMatch } from "react-router-dom";

export default function Details(props) {
    const context = React.useContext(AppContext);
    const match = useRouteMatch("/details/:id");
    const item = context.campaign.find( ({ campaign_id }) => campaign_id === (match.params.id) )
    // const [ img, setImg ] = React.useState([`${process.env.PUBLIC_URL}/Images/` + (!item ? "" : item.filename) + "-1.png"])
    const [ img, setImg ] = React.useState([(!item ? "" : item.campaign_image_url)])

    if(item == null){
        return <h2 className="text-center mt-5">404 Error. Page not found.</h2>
    }

    return (
        <bs.Container fluid className="p-0">
            <div className="float-right" style={{position:"relative", margin:"2rem"}}>
                <bs.Image src={img} style={{height:"400px", width:"400px"}} />
            </div>
            
            <div style={{padding:'1.5rem', marginRight:'3rem'}}>
                <br/>
                <h3><b>{item.title}</b></h3>
                <p style={{fontSize:"1vw"}}><i>
                    <CurrencyFormat value={parseFloat(item.current_amount).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={item.current_amount}/>
                    &nbsp;Out Of&nbsp;
                    <CurrencyFormat value={parseFloat(item.goal).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={item.goal}/>
                </i></p>

                <h5 className="mt-2">Campaign Description</h5>
                <p>{item.description}</p>

                <h5>Additional Campaign Info</h5>
                <p>Days Active: {(item.days_active)}
                <br></br>
                Donation Count: {(item.donators)}
                <br></br>
                City: {item.location_city}
                <br></br>
                Country: {item.location_country}</p>
            </div>
                
            <div>


            </div>
        </bs.Container>
    )
}