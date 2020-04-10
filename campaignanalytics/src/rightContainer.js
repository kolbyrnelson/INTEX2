import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from './context';

export default function RightContainer(props) {
    const context = React.useContext(AppContext);

    const top5 = context.campaign.slice(0).sort((camp,b) => (parseFloat(b.current_amount)) - (parseFloat(camp.current_amount))).slice(0,5);

    return(
        <bs.Nav className="flex-column p-1">
            <div className="text-center mt-2">
            <p  style={{fontSize:"1.5rem"}}>Campaign Leaderboard</p>
            <img alt="trophy" src={`${process.env.PUBLIC_URL}/Images/trophy.ico`} style={{height:"5rem", width:"5rem"}}></img>
            </div>
            <ol className="m-2 p-2">
                {top5.map((camp) => {
                    return (
                        <Link key={camp.campaign_id} to={`/details/${camp.campaign_id}`} className='nav-link 'style={
                            {fontSize:"100%",
                            width:"100%",}}>
                            <li>{camp.title}</li>
                        </Link>
                    )})}
             </ol>
        </bs.Nav>

    )
}