
import React from 'react';
import AppContext from './context';
import { useHistory } from "react-router-dom";
import './App.scss';
import * as bs from 'react-bootstrap';


export default function Search(props) {
    window.scrollTo(0, 0)
    return (
        <bs.Container fluid className="text-center" style={{width:"50%"}}> 
            <br></br>
            <SearchForm/>
        </bs.Container>
)
}

const SearchForm = props => {
    const context = React.useContext(AppContext);
    let history = useHistory();

    //START HERE TO GET UNIQUE LIST OF COUNTRIES
    const countries = [...new Set(context.campaign.map(camp => camp.location_country))];
    countries.sort();

    const handleSubmit = (event) => {
        event.preventDefault();
        const goalFilter = event.target.elements.formGoal.value;
        const countryFilter = event.target.elements.formCountry.value;
        const stateFilter = event.target.elements.formState.value;

        context.filterCampaigns(goalFilter, countryFilter, stateFilter);
        context.resetShowCount();
        history.push('/searchResults');
  };




    return (
        <bs.Form className="m-3" onSubmit={(e) => handleSubmit(e)} >
            <bs.CardGroup>
                <bs.Card>
                    <bs.Card.Body>
                        <bs.Card.Title>Filter Campaigns</bs.Card.Title>
                        <bs.Form.Group>
                            <bs.Form.Label>Goal</bs.Form.Label>
                            <bs.Form.Control type="dropdown" as="select" defaultValue="" name="formGoal">
                                <option value=""></option>
                                <option value="<2000">Less Than $2,000</option>
                                <option value="2000-9999">$2,000 - $9,999</option>
                                <option value="10000-29999">$10,000 - $29,999</option>
                                <option value=">=30000">$30,000+</option>
                            </bs.Form.Control>
                        </bs.Form.Group>
                        <bs.Form.Group>
                            <bs.Form.Label>Country</bs.Form.Label>
                            <bs.Form.Control type="dropdown" as="select" defaultValue="" name="formCountry">
                                {countries.map((country)=> {
                                    return <option value={country} key={country}>{country}</option>
                                    })}
                            </bs.Form.Control>
                        </bs.Form.Group>
                        <bs.Form.Group>
                            <bs.Form.Label>State</bs.Form.Label>
                            <bs.Form.Control type="dropdown" as="select" defaultValue="" name="formState"> 
                                <option value=""></option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </bs.Form.Control>
                        </bs.Form.Group>
                    </bs.Card.Body>
                    <bs.Button type="submit">Find</bs.Button>
                </bs.Card>
            </bs.CardGroup>
        </bs.Form>
)}


