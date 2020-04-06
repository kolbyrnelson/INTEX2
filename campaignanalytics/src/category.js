import React from 'react';
import './App.scss';
import AppContext from './context';
import * as bs from 'react-bootstrap';
import { useRouteMatch } from "react-router-dom";
import ProductCard from './productCard'

export default function Category(props) {
    const context = React.useContext(AppContext);
    const match = useRouteMatch("/category/:cid");

    const filtered = context.products.filter(prod => prod.category === parseInt(match.params.cid));

    if(filtered.length === 0){
        return <h2 className="text-center mt-5">404 Error. Category not found.</h2>
    }
    
    return (
        <bs.Container fluid className="text-center">
            <bs.Row>
                {filtered.map((prod) => {
                return (
                    <ProductCard product={prod} key={prod.id}/>
                )
                })}
            </bs.Row>
        </bs.Container>
    )
}