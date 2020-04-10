import React from 'react';
import * as bs from 'react-bootstrap';
import AppContext from './context';
import axios from 'axios';

function Predict(props) {
    const context = React.useContext(AppContext);
    
    const countries = [...new Set(context.campaign.map(camp => camp.location_country))];
    countries.sort();
    
    const currencyCodes = [...new Set(context.campaign.map(camp => camp.currencycode))];
    currencyCodes.sort();
    
    return (
        <bs.Container fluid className="text-center my-3">
            <PredictiveForm countries={countries} currencyCodes={currencyCodes}/>
        </bs.Container>
    )
}
export default Predict


const PredictiveForm = (props) => {
    const stateList = ["","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    
    const [showPrediction, setPrediction] = React.useState("")
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = async (event) => {
            
            if (event.target.checkValidity() === false) {
                console.log("validation failed");
                event.preventDefault();
                event.stopPropagation();
                setValidated(false);

                window.scroll(0,0)
                return alert("Please make sure to fill out all fields!");
              }
            event.preventDefault();
            setValidated(true);


            let city = "";
            if(event.target.elements.location_city.value !== undefined){
                city = event.target.elements.location_city.value.concat(", ", event.target.elements.location_state.value);
            }
            else{
                city = event.target.elements.location_city.value;
            }
            // const resp = await axios.post('http://localhost:8000/api/PredictiveAPI/', {
            const resp = await axios.post('/api/PredictiveAPI/', {
                column: '0',
                unnamed: '0',
                campaign_id: '0',
                auto_fb_post_mode: parseInt(event.target.elements.auto_fb_post_mode.value),
                currencycode: event.target.elements.currencycode.value,
                current_amount: '0',
                goal: event.target.elements.goal.value,
                donators: '0',
                days_active: '0',
                title: event.target.elements.title.value,
                description: event.target.elements.description.value,
                has_beneficiary: parseInt(event.target.elements.has_beneficiary.value),
                user_id: '0',
                visible_in_search: '0',
                is_launched: '0',
                campaign_hearts: '0',
                social_share_total: '0',
                location_city: city,
                location_country: event.target.elements.location_country.value,
                location_zip: event.target.elements.location_zip.value,
                averageMoneyPerDay: '0',
            })

            console.log(resp);
            const respInput = resp.data['result']
            const reCalcResp = parseFloat(Math.exp(respInput) - 1).toFixed(2)
            setPrediction(`You can expect to earn an average of $${reCalcResp} per day!`);
            window.scrollTo(0, 0);
            
            await new Promise(resolve => {
                setTimeout(() => {  // wait 2 seconds, then set the form as "not submitting"
                    resolve()
                }, 2000)
            })
    };
    return (
                <bs.Form id="campaignCalculator" noValidate validated={validated} onSubmit={(e) => handleSubmit(e)} >
                    <bs.Row>
                        <bs.Col sm={8}>
                            <bs.Card style={{ width: '100%'}}>
                                <bs.Card.Body>
                                    <bs.Card.Title style={{ color: 'black', fontSize: '30px', textAlign: 'center'}}>Go-Fund-Me Success Calculator</bs.Card.Title>
                                    <p>Enter the details for the GoFundMe Campaign you are planning, and we will predict how successful it will be!</p>
                                        <bs.Form.Group as={bs.Row} controlId="title">
                                            <bs.Form.Label column sm={4} className="text-right">Title</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="title" type="text" placeholder="Campaign Title"/>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="description">
                                            <bs.Form.Label column sm={4} className="text-right">Description</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="description" type="text" placeholder="Campaign Description"/>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="goal">
                                            <bs.Form.Label column sm={4} className="text-right">Goal</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="goal" type="text" placeholder="Monetary Goal"/>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="location_city">
                                            <bs.Form.Label column sm={4} className="text-right">City</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="location_city" type="text"/>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="location_state">
                                            <bs.Form.Label column sm={4} className="text-right">State</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control name="location_state" type="dropdown" as="select">
                                                    {stateList.map((state)=> {
                                                        return <option value={state} key={state}>{state}</option>
                                                    })}
                                                </bs.Form.Control>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="location_country">
                                            <bs.Form.Label column sm={4} className="text-right">Country</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="location_country" type="dropdown" as="select">
                                                    {props.countries.map((country)=> {
                                                        return <option value={country} key={country}>{country}</option>
                                                    })}
                                                </bs.Form.Control>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="location_zip">
                                            <bs.Form.Label column sm={4} className="text-right">Zipcode</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="location_zip" type="text"/>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="currencycode">
                                            <bs.Form.Label column sm={4} className="text-right">Currency Type</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="currencycode" type="dropdown" as="select">
                                                    {props.currencyCodes.map((code)=> {
                                                        return <option value={code} key={code}>{code}</option>
                                                    })}
                                                </bs.Form.Control>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="has_beneficiary">
                                            <bs.Form.Label column sm={4} className="text-right">Has Beneficiary?</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="has_beneficiary" type="dropdown" defaultValue={1} as="select">
                                                    <option value={1}>Yes</option>
                                                    <option value={0}>No</option>
                                                </bs.Form.Control>
                                            </bs.Col>
                                        </bs.Form.Group>
                                        <bs.Form.Group as={bs.Row} controlId="auto_fb_post_mode">
                                            <bs.Form.Label column sm={4} className="text-right">Auto Post to Facebook?</bs.Form.Label>
                                            <bs.Col sm={8}>
                                                <bs.Form.Control required name="auto_fb_post_mode" type="dropdown" defaultValue={1} as="select">
                                                    <option value={1}>Yes</option>
                                                    <option value={0}>No</option>
                                                </bs.Form.Control>
                                            </bs.Col>
                                        </bs.Form.Group>
                                </bs.Card.Body>
                                <bs.Button size="lg" className='mt-1 align-center text-center' type="submit">
                                    Calculate
                                </bs.Button>
                            </bs.Card> 
                        </bs.Col>
                        <bs.Col sm={4}>      
                            <bs.Container style={{ width: '100%'}} >
                                <h1 style={{ color: 'black', fontSize: '30px', textAlign: 'center', paddingTop: "20px"}}>Results</h1>
                                <p style={{ fontSize: '30px', color: 'red', textAlign: "center"}}>{showPrediction}</p>
                                <br></br>
                                <br></br>
                                {/* <bs.Button size="lg" className='btn btn-warning mt-1 align-center text-center' onClick={ReactDOM.findDOMNode(this).getElementsByClassName("Form").reset()}>
                                    Clear Calculator
                                </bs.Button> */}
                                {/* <bs.Button size="lg" className='btn btn-warning mt-1 align-center text-center' onClick={history.push('/analytics')}>
                                    Reload Window
                                </bs.Button>
                                <Link className='btn btn-warning mt-1 align-center text-center' to={`/analytics/`} style={{size:"lg",}}>
                                    Try Again
                                </Link> */}
                            </bs.Container>
                        </bs.Col>
                    </bs.Row> 
                </bs.Form>
    )
}

// const PredictiveForm = props => {
//     return(
        
//     )
// }

// const countryList = (props) => {
//     const context = React.useContext(AppContext);

//     const countries = [...new Set(context.campaign.map(camp => camp.location_country))];
//     countries.sort();

//     countries.map((country)=> {
//     return (<option value={country} key={country}>{country}</option>)
// })}

// const optionList = (props) => (
//     props.options.map((opt) => {
//         return(<option key={opt[0]+'id'} value={opt[1]}>{opt[0]}</option>)
// }))

// const statesList = (props) => (
//     props.options.map((opt) => {
//         return(<option key={opt+'id'} value={opt}>{opt}</option>)
// }))

// const Input = (props) => (
//     <div>
//         <Field name={props.name}>{rProps => (
//             <bs.Form.Group as={bs.Row}>
//                 {props.title &&
//                     <bs.Form.Label column sm={4} className="text-right">{props.title}</bs.Form.Label>
//                 }
//                 <bs.Col sm={8}>
//                     <bs.Form.Control
//                         type={props.type}
//                         as={props.as}
//                         placeholder={props.placeholder}
//                         disabled={rProps.form.isSubmitting}          
//                         {...rProps.field}
//                     >
//                     {props.states==="yes" ? statesList(props) : props.options && optionList(props)}
//                     </bs.Form.Control>
//                 </bs.Col>
//                 {rProps.meta.touched && rProps.meta.error &&
//                     <div className="text-danger">{rProps.meta.error}</div>
//                 }
//             </bs.Form.Group>
//         )}</Field>
//     </div>
// )
