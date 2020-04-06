import React from 'react';
import './App.scss';
import AppContext from './context';
import * as bs from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { useRouteMatch } from "react-router-dom";

export default function Details(props) {
    const context = React.useContext(AppContext);
    const match = useRouteMatch("/details/:id");
    const item = context.products.find( ({ id }) => id === parseInt(match.params.id) )
    const [ img, setImg ] = React.useState([`${process.env.PUBLIC_URL}/Images/` + (!item ? "" : item.filename) + "-1.png"])

    if(item == null){
        return <h2 className="text-center mt-5">404 Error. Page not found.</h2>
    }
    
    return (
        
        <bs.Container fluid className="p-0">
            <div className="float-right" style={{position:"relative", margin:"2rem"}}>
                <bs.Image src={img} style={{height:"300px", width:"300px"}} />
                    <div>
                        <bs.Image src={`../Images/${item.filename}-1.png`}thumbnail onMouseEnter={() => setImg((`../Images/${item.filename}-1.png`))} 
                            style={{
                                height:"30px", 
                                width:"30px",
                                margin:"3px"}} />
                        <bs.Image src={`../Images/${item.filename}-2.png`}thumbnail onMouseEnter={() => setImg((`../Images/${item.filename}-2.png`))} 
                            style={{
                                height:"30px", 
                                width:"30px",
                                margin:"3px"}} />
                        <bs.Image src={`$../Images/${item.filename}-3.png`}thumbnail onMouseEnter={() => setImg((`../Images/${item.filename}-3.png`))} 
                            style={{
                                height:"30px", 
                                width:"30px",
                                margin:"3px"}} />
                        <bs.Image src={`../Images/${item.filename}-4.png`}thumbnail onMouseEnter={() => setImg((`../Images/${item.filename}-4.png`))} 
                            style={{
                                height:"30px", 
                                width:"30px",
                                margin:"3px"}} />
                    </div>
            </div>
            
            <div style={{padding:'1.5rem', marginRight:'3rem'}}>
                <br/>
                <h4>{item.name}</h4>
                <CurrencyFormat value={parseFloat(item.price).toFixed(2)} prefix={'$'} displayType={'text'} thousandSeparator={true} render={item.price}/>
                <br/><br/>
                <p>{item.description}</p>
                <bs.Button variant='warning' onClick= {e=>{
                    context.addToCart(item.id);
                }}>Add To Cart</bs.Button>
            </div>
        </bs.Container>
    )
}