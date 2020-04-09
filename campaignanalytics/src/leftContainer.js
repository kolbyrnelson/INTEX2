import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import PRODUCTS from './products.js';
import AppContext from './context';

export default function LeftContainer(props) {
    // let categories = {}
    // for(const p of Object.values(PRODUCTS)){
    //     const current = categories[p.category] || 0
    //     categories[p.category] = current + 1
    // }

    // const sortable = [];
    // for (const cat in categories) {
    //     sortable.push([cat, categories[cat]]);
    // }
    // sortable.sort((a, b) => (a > b) ? 1 : -1);

    // const objSorted = {}
    // sortable.forEach(function(item){
    //     objSorted[item[0]]=item[1]
    // })
    
    // categories = objSorted

    const context = React.useContext(AppContext);
        
    const group1 = context.campaign.filter(camp => parseInt(camp.goal) < 2000);
    const group2 = context.campaign.filter(camp => parseInt(camp.goal) >= 2000 && parseInt(camp.goal) < 10000);
    const group3 = context.campaign.filter(camp => parseInt(camp.goal) >= 10000 && parseInt(camp.goal) < 30000);
    const group4 = context.campaign.filter(camp => parseInt(camp.goal) >= 30000);

    return(
        <bs.Nav className="flex-column">
            Goal Amounts
            <Link to={'/'} className='nav-link'>
                All Campaigns ({context.campaign.length})
            </Link>
            <Link to={`/searchResults`} onClick={() => context.setFilteredCampaigns(group1)} className='nav-link'>Less Than $2,000 ({group1.length})</Link>
            <Link to={`/searchResults`} onClick={() => context.setFilteredCampaigns(group2)} className='nav-link'>$2,000 - $9,999 ({group2.length})</Link>
            <Link to={`/searchResults`} onClick={() => context.setFilteredCampaigns(group3)} className='nav-link'>$10,000 - $29,999 ({group3.length})</Link>
            <Link to={`/searchResults`} onClick={() => context.setFilteredCampaigns(group4)} className='nav-link'>More Than $30,000 ({group4.length})</Link>
        </bs.Nav>

    )
}