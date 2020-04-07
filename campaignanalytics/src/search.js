
import React from 'react';
import AppContext from './context';
import './App.scss';
import * as bs from 'react-bootstrap';
// import { Formik, Form, Field} from 'formik'


export default function Search(props) {

    const context = React.useContext(AppContext);

    //START HERE TO GET UNIQUE LIST OF COUNTRIES
    const countries = [...new Set(context.campaign.map(camp => camp.location_country))];
    console.log("countries:",countries);

    return (
        <bs.Container fluid className="text-center" style={{width:"50%"}}> 
            <br></br>
                <SearchForm className="m-3"/>
        </bs.Container>
)
}

class SearchForm extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      const output = document.createElement('div');
      const data = [...event.target.elements].reduce((data, element) => {
        if (element.name && element.value) {
          data[element.name] = element.value;
        }
        return data;
      }, {});
      output.textContent = JSON.stringify(data);
      document.body.appendChild(output);
    };
    render() {
      return (
        <bs.Form action="/search" onSubmit={this.handleSubmit}>
            <bs.CardGroup>
                <bs.Card>
                    <bs.Card.Body>
                        <bs.Card.Title>Filter Campaigns</bs.Card.Title>
                        <bs.Form.Group>
                            <bs.Form.Label>Goal</bs.Form.Label>
                            <bs.Form.Control type="dropdown" as="select" defaultValue="">
                                <option value=""></option>
                                <option value="<2000">Less Than $2,000</option>
                                <option value="BETWEEN 2000 AND 9999">$2,000 - $9,999</option>
                                <option value="BETWEEN 10000 AND 29999">$10,000 - $29,999</option>
                                <option value=">=30000">$30,000+</option>
                            </bs.Form.Control>
                        </bs.Form.Group>
                        <bs.Form.Group>
                            <bs.Form.Label>Country</bs.Form.Label>
                            <bs.Form.Control type="dropdown" as="select" defaultValue="">
                                <option value=""></option>
                                <option value="<2000">Less Than $2,000</option>
                                <option value="BETWEEN 2000 AND 9999">$2,000 - $9,999</option>
                                <option value="BETWEEN 10000 AND 29999">$10,000 - $29,999</option>
                                <option value=">=30000">$30,000+</option>
                            </bs.Form.Control>
                        </bs.Form.Group>
                        <bs.Form.Group>
                            <bs.Form.Label>State</bs.Form.Label>
                            <bs.Form.Control type="dropdown" as="select" defaultValue=""> 
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
                        {/* <Input title="Name:" name="name" type="text"/>
                        <Input title="Address Line 1:" name="address1" type="text"/>
                        <Input title="Address Line 2:" name="address2" type="text"/>
                        <Input title="City:" name="city" type="text"/>
                        <Input title="State:" name="state" type="dropdown" as="select" options={["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]} />
                        <Input title="Zip:" name="zipcode" type="text"/> */}
                    </bs.Card.Body>
                    <bs.Button>Find</bs.Button>
                </bs.Card>
            </bs.CardGroup>
        </bs.Form>
      );
    }
  }
