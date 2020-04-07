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

    return(
        <bs.Nav className="flex-column">
            <Link to={'/'} className='nav-link'>
                All Campaigns ({context.campaign.length})
            </Link>
            {context.campaign.map((cat) => {
                return (
                    <Link
                        key={cat.campaign_id}
                        to={`/category/${cat.category_id}`}
                        className='nav-link'
                    >{`${cat.category_id} (${context.campaign.filter(prod => prod.category_id === cat.category_id).length})`}
                    </Link>
            )
            })}
        </bs.Nav>

    )
}