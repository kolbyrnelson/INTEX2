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
                column: '0' ,
                unnamed: '0',
                campaign_id: '0',
                auto_fb_post_mode: '',
                currencycode: '',
                current_amount: '0',
                goal: '',
                donators: '0',
                days_active: '0',
                title: '',
                description: '',
                has_beneficiary: '',
                user_id: '0',
                visible_in_search: '1',
                is_launched: '0',
                campaign_hearts: '0',
                social_share_total: '0',
                location_city: '',
                location_country: '',
                location_zip: '',
                averageMoneyPerDay: '0',
                donationsPerDay: '0',

            }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
                const errors = {};
                // console.log('validating', values);
                if(values.auto_fb_post_mode === ""){errors.auto_fb_post_mode = 'Please a value to auto FB post'};
                if(values.currencycode === ""){errors.currencycode = 'Please enter a value for the currency'};
                if(values.goal === ""){errors.goal = 'You need a value for the goal'};
                if(values.title === ""){errors.title = 'You need a value for the title'};
                if(values.description === ""){errors.description = 'You need a value for the description'};
                if(values.location_city === ""){errors.location_city = 'You need a value for the city'};
                if(values.location_country === ""){errors.location_country = 'You need a value for the country'};
                if(values.location_zip === ""){errors.location_zip = 'You need a value for the zipcode'};


                return errors;
            }}
            onSubmit={async (values, actions) => {
                console.log('values:', values);
                    
                const resp = await axios.post('http://localhost:8000/api/PredictiveAPI/', {
                    column: values.column,
                    unnamed: values.unnamed,
                    campaign_id: values.campaign_id,
                    auto_fb_post_mode: values.auto_fb_post_mode,
                    currencycode: values.currencycode,
                    current_amount: values.current_amount,
                    goal: values.goal,
                    donators: values.donators,
                    days_active: values.days_active,
                    title: values.title,
                    description: values.description,
                    has_beneficiary: values.has_beneficiary,
                    user_id: values.user_id,
                    visible_in_search: values.visible_in_search,
                    is_launched: values.is_launched,
                    campaign_hearts: values.campaign_hearts,
                    social_share_total: values.social_share_total,
                    location_city: values.location_city,
                    location_country: values.location_country,
                    location_zip: values.location_zip,
                    averageMoneyPerDay: values.averageMoneyPerDay,
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
                    <bs.Card.Title style={{ color: 'black', fontSize: '30px', fontWeight:'bold', textAlign: 'center'}}>Go-Fund-Me Data</bs.Card.Title>

                    <Input title="Title:" name="title" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Description:" name="description" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Goal:" name="goal" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="City:" name="location_city" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Country:" name="location_country" type="text" disabled={props.form.isSubmitting} />
                    <Input title="Zipcode:" name="location_zip" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Currency Type:" name="currencycode" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Beneficiary:" name="has_beneficiary" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="FaceBook:" name="auto_fb_post_mode" type="text" disabled={props.form.isSubmitting}/>
                    {/* <bs.Form.Group  disabled={props.form.isSubmitting}>
                        <bs.Form.Label>Beneficiary?</bs.Form.Label>
                        <bs.Form.Control type="dropdown" as="select" defaultValue="" name="has_beneficiary">
                            <option value=""></option>
                            <option value="TRUE">Yes</option>
                            <option value="FALSE">No</option>
                        </bs.Form.Control>
                    </bs.Form.Group> 
                    <bs.Form.Group  disabled={props.form.isSubmitting}>
                        <bs.Form.Label>Post to Facebook?</bs.Form.Label>
                        <bs.Form.Control type="dropdown" as="select" defaultValue="" name="auto_fb_post_mode">
                            <option value=""></option>
                            <option value="TRUE">Yes</option>
                            <option value="FALSE">No</option>
                        </bs.Form.Control>
                    </bs.Form.Group>                  */}

                </bs.Card.Body>
            </bs.Card>
            <bs.Card>
                <bs.Card.Body>
                    <bs.Card.Title style={{ color: 'black', fontSize: '30px', fontWeight:'bold', textAlign: 'center'}}>Calculate</bs.Card.Title>
                    {/* <label>Card details</label> */}
                    {/* <CardElement options={CARD_ELEMENT_OPTIONS}/> */}

                    <div style={{ padding: '20px', textAlign: 'center' }}>
                        <bs.Button size="lg" className='mt-5 align-center text-center' variant="success" type="submit" disabled={props.form.isSubmitting}>
                            {props.form.isSubmitting &&
                            <bs.Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />}
                            Submit
                        </bs.Button>
                    </div>
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
