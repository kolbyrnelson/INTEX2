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
                All Products ({context.products.length})
            </Link>
            {context.categories.map((cat) => {
                return (
                    <Link
                        key={cat.id}
                        to={`/category/${cat.id}`}
                        className='nav-link'
                    >{`${cat.title} (${context.products.filter(prod => prod.category === cat.id).length})`}
                    </Link>
            )
            })}
        </bs.Nav>

    )
}