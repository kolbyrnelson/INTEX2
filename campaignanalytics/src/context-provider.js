import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import { produce } from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            // methods here
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            getCartTotal: this.getCartTotal,
            clearCart: this.clearCart
            // accessed using context.method
        }
        this.state = {
            categories: [],
            products: [],
            cart: {},
            cartCount: 0,
            totalPrice: 0
        }
    }

    render() {
        if (!this.state.categories) {
            return <div>Loading...</div>
        }
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    addToCart = (pid) => {
        this.setState(state => produce(state, draft => {
            
            if(!draft.cart[pid]){
                draft.cart[pid] = 1;
            }
            else{
                draft.cart[pid] += 1;
            }

            let entries = Object.values(draft.cart);
            draft.cartCount = 0;

            for (let item of entries){
                draft.cartCount += item;
            }
        }))
        this.getCartTotal();
    }

    removeFromCart = (pid) => {
        this.setState(state => produce(state, draft => {
            
            delete draft.cart[pid];

            let entries = Object.values(draft.cart);
            draft.cartCount = 0;

            for (let item of entries){
                draft.cartCount += item;
            }
        }))
        this.getCartTotal();
    }

    clearCart = (cart) => {
        this.setState(state => produce(state, draft => {
            draft.cart = {};
            draft.cartCount = 0;
        }))
    }

    getCartTotal = (pid) => {
        this.setState(state => produce(state, draft => {
            let subtotal = 0;
            Object.entries(draft.cart).forEach(([key,value]) => {
                const prod = draft.products.find(({ id }) => id === parseInt(key))
                subtotal = (parseFloat(prod.price)*value) + subtotal
            })
            draft.totalPrice = subtotal;
        }))
    }

    async componentDidMount() {
        const resp = await axios.get('localhost:8000/category/')
        const prod = await axios.get('localhost:8000/product/')

        this.setState({categories: resp.data, products: prod.data})
    }

}
