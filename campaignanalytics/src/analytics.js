import React from 'react'
import * as bs from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Formik, Form, Field} from 'formik'
import AppContext from './context';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


// const stripePromise = loadStripe('pk_test_6YhTviRy8uKYF8GicIMBBLam00K2xHrJe9')

function Checkout(props) {
    // we'll add Stripe's Elements component here later
    return (
        <bs.Container>
            <CheckoutController />
        </bs.Container>
    )
}
export default Checkout

const CheckoutController = props => {
    const context = React.useContext(AppContext);
    // const stripe = useStripe();
    // const elements = useElements();
    // const [stripeError, setStripeError] = React.useState(null)
    // let history = useHistory();
    return (
        <Formik
            initialValues={{
                age: '',
                sex: '',
                bmi: '',
                children: '',
                smoker: '',
                region: '',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {};
                // console.log('validating', values);
                if(values.age === ""){errors.age = 'Please enter your name'};
                if(values.sex === ""){errors.sex = 'Please enter your address'};
                if(values.bmi === ""){errors.bmi = 'You need a value for the city'};
                if(values.children === ""){errors.children = 'You need a value for the state'};
                if(values.smoker === ""){errors.smoker = 'You need a value for the zipcode'};
                if(values.region === ""){errors.region = 'You need a value for the zipcode'};
                return errors;
            }}
            onSubmit={async (values, actions) => {
                console.log('values:', values);
                // console.log('actions:', actions);
                
                // let listItems = [];
                // for (const [pid, qty] of Object.entries(context.cart)) {
                //     const product = context.products[pid]
                //     if (product) {
                //          listItems.push({
                //               pid: pid,
                //               qty: qty,
                //               price: product.price,
                //          })
                //     }
                // }
                
                // try{
                    
                const resp = await axios.post('http://localhost:8000/api/CreateSale/', {
                    age: values.age,
                    sex: values.sex,
                    bmi: values.bmi,
                    children: values.children,
                    smoker: values.smoker,
                    region: values.region,
                })

                console.log(resp)
                // }catch(err) {
                //     console.log('Post error:', err)
                //     //set state or something to let customer know post failed
                // }

                // const stripeResp = await stripe.confirmCardPayment(resp.data['client_secret'], {
                //     payment_method: {
                //       card: elements.getElement(CardElement),
                //       billing_details: {
                //         name: values.name,
                //       },
                //     }
                //   });

                // console.log('stripeResp:', stripeResp);
                // actions.setSubmitting(false);
                // if (stripeResp.error) {
                //     setStripeError(stripeResp.error.message);
                //     // Show error to your customer (e.g., insufficient funds)
                //     // console.log(stripeResp.error.message);
                // } else {
                // // The payment has been processed!
                // if (stripeResp.paymentIntent.status === 'succeeded') {
                //     context.clearCart();
                //     history.push('/receipt');
                //     // Show a success message to your customer
                //     // There's a risk of the customer closing the window before callback
                //     // execution. Set up a webhook or plugin to listen for the
                //     // payment_intent.succeeded event that handles any business critical
                //     // post-payment actions.
                // }
                // console.log(resp.data)
                await new Promise(resolve => {
                    setTimeout(() => {  // wait 2 seconds, then set the form as "not submitting"
                        resolve()
                    }, 2000)
                })
                // console.log('after the 2 seconds')
            }}// }}}
        >{form => (
            <div> 
                <PaymentForm form={form} total={context.totalPrice} />
            </div>
        )}</Formik>
    )
}


const PaymentForm = props => (
    <Form>
        <bs.CardGroup>
            <bs.Card>
                <bs.Card.Body>
                    <bs.Card.Title>Shipping</bs.Card.Title>
                    <Input title="Age:" name="age" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Sex:" name="sex" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="BMI:" name="bmi" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Children:" name="children" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Smoker:" name="smoker" type="text"disabled={props.form.isSubmitting} />
                    <Input title="Region:" name="region" type="text" disabled={props.form.isSubmitting}/>


                </bs.Card.Body>
            </bs.Card>
            <bs.Card>
                <bs.Card.Body>
                    <bs.Card.Title>Payment</bs.Card.Title>
                    <label>Card details</label>
                    {/* <CardElement options={CARD_ELEMENT_OPTIONS}/> */}
                    
                    <bs.Button className='mt-5 align-center text-center' variant="success" type="submit" disabled={props.form.isSubmitting}>
                        {props.form.isSubmitting &&
                        <bs.Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />}
                        Confirm Checkout
                    </bs.Button>
                </bs.Card.Body>

            </bs.Card>
        {/* <bs.Button variant="success" type="submit" style={{"marginLeft":"23%"}}>Submit</bs.Button> */}
        </bs.CardGroup>

    </Form>
)


/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */

const optionList = (props) => (
    props.options.map((opt) => {
        return(<option key={opt+'id'} value={opt}>{opt}</option>)
}))

const Input = (props) => (
    <div>
        <Field name={props.name}>{rProps => (
            <bs.Form.Group>
                {props.title &&
                    <bs.Form.Label>{props.title}</bs.Form.Label>
                }
                <bs.Form.Control
                    type={props.type}
                    as={props.as}
                    placeholder={props.placeholder}
                    disabled={rProps.form.isSubmitting}          
                    {...rProps.field}
                >
                {props.options &&
                    optionList(props)
                }
                </bs.Form.Control>
                {rProps.meta.touched && rProps.meta.error &&
                    <div className="text-danger">{rProps.meta.error}</div>
                }
            </bs.Form.Group>
        )}</Field>
    </div>
)
