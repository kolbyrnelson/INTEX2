import React from 'react';
import './App.scss';
import AppContext from './context';
import * as bs from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { useRouteMatch } from "react-router-dom";
import axios from 'axios';

export default function Details(props) {
    
    const context = React.useContext(AppContext);
    const match = useRouteMatch("/details/:id");

    let item = context.campaign.find( ({ campaign_id }) => campaign_id === (match.params.id) );

    const [showRespOutput, setRespOutput] = React.useState("");

    if(item == null){
        return <h2 className="text-center mt-5">404 Error. Page not found.</h2>
    }

    const columnInput = 0
    const unnamedInput = 0
    if (item.column === "") {
        item.column = "0"   
    }
    if (item.unnamed === "") {
        item.unnamed = "0"   
    }
    if (item.campaign_id === "") {
        item.campaign_id = "0"   
    }
    if (item.auto_fb_post_mode === "") {
        item.auto_fb_post_mode = "0"  
    }
    if (item.currencycode === "") {
        item.currencycode = "USD"   
    }
    if (item.current_amount === "") {
        item.current_amount = "0"   
    }
    if (item.goal === "") {
        item.goal = "0"   
    }
    if (item.donators === "") {
        item.donators = "0"   
    }
    if (item.days_active === "") {
        item.days_active = "0"   
    }
    if (item.title === "") {
        item.title = "Hi"   
    }
    if (item.description === "") {
        item.description = "Hi"   
    }
    if (item.has_beneficiary === "") {
        item.has_beneficiary = "0"   
    }
    if (item.user_id === "") {
        item.user_id = "0"   
    }
    if (item.visible_in_search === "") {
        item.visible_in_search = "0"   
    }
    if (item.is_launched === "") {
        item.is_launched = "0"   
    }
    if (item.campaign_hearts === "") {
        item.campaign_hearts = "0"   
    }
    if (item.social_share_total === "") {
        item.social_share_total = "0"   
    }
    if (item.location_city === "") {
        item.location_city = "Hi"   
    }
    if (item.location_country === "") {
        item.location_country = "US"   
    }
    if (item.location_zip === "") {
        item.location_zip = "12345"   
    }

    //Write an if statement to not include if the variable is blank
    //Write validations for the inputes (ex. zip) that may have characters to be set to 0
    Quality(item)
    // This is where we send the details of the campaign to the Azure api
    async function Quality(item) {
        // const resp = await axios.post('http://localhost:8000/api/QualityAPI/', {
        const resp = await axios.post('/api/QualityAPI/', {
            column: columnInput,
            unnamed: unnamedInput,
            campaign_id: item.campaign_id,
            auto_fb_post_mode: item.auto_fb_post_mode,
            currencycode: item.currencycode,
            current_amount: item.current_amount,
            goal: item.goal,
            donators: item.donators,
            days_active: item.days_active,
            title: item.title,
            description: item.description,
            has_beneficiary: item.has_beneficiary,
            user_id: item.user_id,
            visible_in_search: item.visible_in_search,
            is_launched: item.is_launched,
            campaign_hearts: item.campaign_hearts,
            social_share_total: item.social_share_total,
            location_city: item.location_city,
            location_country: item.location_country,
            location_zip: item.location_zip,
            averageMoneyPerDay: (item.current_amount / item.days_active),
            donationsPerDay: (item.donators / item.days_active),
            PercentPerDay: ((item.current_amount / item.goal) / item.days_active),
            SharesPerDay: (item.social_share_total / item.days_active),
            campaignheartsPerDay: (item.campaign_hearts / item.days_active),
        })

        const respOutput = (parseFloat(resp.data['result']))
        const percCalc = (respOutput * 100).toFixed(1)
        setRespOutput(percCalc)
    }

    return (

        <bs.Container fluid className="p-0">
            <ShowTheImage campaigns={context.campaign} cid={match.params.id}/>
            <div style={{padding:'1.5rem', marginRight:'3rem'}}>
                <br/>
                <h3><b>{item.title}</b></h3>
                <p style={{fontSize:"1vw"}}><i>
                    <CurrencyFormat value={parseFloat(item.current_amount).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={item.current_amount}/>
                    &nbsp;Out Of&nbsp;
                    <CurrencyFormat value={parseFloat(item.goal).toFixed(0)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={item.goal}/>
                </i></p>
                
                <p style={{ fontWeight: 'bold', fontSize: '15px', color: 'red'}}>Predicted Goal Completion Rate Per Day: {showRespOutput}%</p>
                
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

const ShowTheImage = (props) => {
    return(
        <div className="float-right" style={{position:"relative", margin:"2rem"}}>
            <bs.Image src={props.campaigns.find( ({ campaign_id }) => campaign_id === (props.cid) ).campaign_image_url} style={{height:"400px", width:"400px"}} />
        </div>
    );
}