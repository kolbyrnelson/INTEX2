import React from 'react';
import './App.scss';
import AppContext from './context';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Cart(props) {
    const context = React.useContext(AppContext);
    if(context.cartCount === 0){
        return <h4 className="p-4 text-center">Your cart is empty</h4>
    }
    return (
        <div>
            <div className="p-2 text-center">
                <br/>
                <h4>Your Shopping Cart</h4>
            </div>
            <bs.Table striped hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(context.cart).map(([key, value]) => {
                        const item = context.products.find(({ id }) => id === parseInt(key) );
                        const subtotal = item.price * value;
                        return (
                            <tr key={key}>
                                <td>
                                    <bs.Image src={`../Images/${item.filename}-1.png`} style={{height:"50px", width:"50px"}} />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{value}</td>
                                <td>${subtotal.toFixed(2)}</td>
                                <td>
                                    <bs.Button variant='danger' onClick= {e=>{
                                        context.removeFromCart(item.id);
                                    }}>Remove</bs.Button>
                                </td>
                            </tr>
                        )
                    } 
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4"></th>
                        <td><b>Total: ${context.totalPrice.toFixed(2)}</b></td>
                    </tr>
                </tfoot>
            </bs.Table>
            <div className="p-2 text-center">
                <Link className="btn btn-warning" to="/checkout">Checkout</Link>
            </div>
        </div>
    )
}