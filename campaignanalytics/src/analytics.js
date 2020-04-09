import React from 'react'
import * as bs from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Formik, Form, Field} from 'formik'
import AppContext from './context';


function Checkout(props) {

    return (
        <bs.Container fluid className="text-center my-3" style={{width:"50%"}}>
            <CheckoutController />
        </bs.Container>
    )
}
export default Checkout

const CheckoutController = props => {
    const [showPrediction, setPrediction] = React.useState("")

    return (
        <Formik
            initialValues={{
                column: '0' ,
                unnamed: '0',
                campaign_id: '0',
                auto_fb_post_mode: '1',
                currencycode: '',
                current_amount: '0',
                goal: '',
                donators: '0',
                days_active: '0',
                title: '',
                description: '',
                has_beneficiary: '1',
                user_id: '0',
                visible_in_search: '0',
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
                let city = "";
                if(values.location_state !== undefined){
                    city = values.location_city.concat(", ", values.location_state);
                }
                else{
                    city = values.location_city;
                }
                // console.log("city: "+city);
                const resp = await axios.post('http://localhost:8000/api/PredictiveAPI/', {
                    column: values.column,
                    unnamed: values.unnamed,
                    campaign_id: values.campaign_id,
                    auto_fb_post_mode: parseInt(values.auto_fb_post_mode),
                    currencycode: values.currencycode,
                    current_amount: values.current_amount,
                    goal: values.goal,
                    donators: values.donators,
                    days_active: values.days_active,
                    title: values.title,
                    description: values.description,
                    has_beneficiary: parseInt(values.has_beneficiary),
                    user_id: values.user_id,
                    visible_in_search: values.visible_in_search,
                    is_launched: values.is_launched,
                    campaign_hearts: values.campaign_hearts,
                    social_share_total: values.social_share_total,
                    location_city: city,
                    location_country: values.location_country,
                    location_zip: values.location_zip,
                    averageMoneyPerDay: values.averageMoneyPerDay,
                })

                // console.log(resp);
                const respInput = parseInt(resp.data['result']).toFixed(0);
                setPrediction(`You can expect to have ${respInput} donors!`);
                window.scrollTo(0, 0);
                
                await new Promise(resolve => {
                    setTimeout(() => {  // wait 2 seconds, then set the form as "not submitting"
                        resolve()
                    }, 2000)
                })
            }}
        >{form => (
            <div> 
                <div style={{ fontSize: '30px', color: 'red', textAlign: "center", padding: '15px' }}>{showPrediction}</div>
                <PaymentForm form={form} />
            </div>
        )}</Formik>
    )
}


const PaymentForm = props => (
    <Form>
        <bs.CardGroup>
            <bs.Card>
                <bs.Card.Body>
                    <bs.Card.Title style={{ color: 'black', fontSize: '30px', textAlign: 'center'}}>Go-Fund-Me Data</bs.Card.Title>
                    <p>Enter the details for the GoFundMe Campaign you are planning, and we will predict how successful it will be!</p>
                    <Input title="Title" name="title" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Description" name="description" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Goal" name="goal" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="City" name="location_city" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="State" name="location_state" type="dropdown" as="select" disabled={props.form.isSubmitting} states="yes" options={["","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]} />
                    <Input title="Country" name="location_country" type="text" disabled={props.form.isSubmitting} />
                    <Input title="Zipcode" name="location_zip" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Currency Type" name="currencycode" type="text" disabled={props.form.isSubmitting}/>
                    <Input title="Has Beneficiary?" name="has_beneficiary" type="dropdown" as="select" options={[["Yes", 1], ["No", 0]]} disabled={props.form.isSubmitting}/>
                    <Input title="Auto Post to Facebook?" name="auto_fb_post_mode" type="dropdown" as="select" options={[["Yes", 1], ["No", 0]]} disabled={props.form.isSubmitting}/>
                </bs.Card.Body>
                <bs.Button size="lg" className='mt-1 align-center text-center' type="submit" disabled={props.form.isSubmitting}>
                    {props.form.isSubmitting &&
                    <bs.Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />}
                    Calculate
                </bs.Button>
            </bs.Card>
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

// {countries.map((country)=> {
//     return <option value={country} key={country}>{country}</option>
//     })}

const optionList = (props) => (
    props.options.map((opt) => {
        return(<option key={opt[0]+'id'} value={opt[1]}>{opt[0]}</option>)
}))

const statesList = (props) => (
    props.options.map((opt) => {
        return(<option key={opt+'id'} value={opt}>{opt}</option>)
}))

const Input = (props) => (
    <div>
        <Field name={props.name}>{rProps => (
            <bs.Form.Group as={bs.Row}>
                {props.title &&
                    <bs.Form.Label column sm={4} className="text-right">{props.title}</bs.Form.Label>
                }
                <bs.Col sm={8}>
                    <bs.Form.Control
                        type={props.type}
                        as={props.as}
                        placeholder={props.placeholder}
                        disabled={rProps.form.isSubmitting}          
                        {...rProps.field}
                    >
                    {props.states ? statesList(props) : props.options && optionList(props)}
                    </bs.Form.Control>
                </bs.Col>
                {rProps.meta.touched && rProps.meta.error &&
                    <div className="text-danger">{rProps.meta.error}</div>
                }
            </bs.Form.Group>
        )}</Field>
    </div>
)
