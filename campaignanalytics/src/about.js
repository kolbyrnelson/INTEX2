import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';

export default function About() {
    return (
        <bs.CardGroup>
            <bs.Card>
                <bs.Card.Title style={{textAlign: "center", paddingTop: "20px" }}>
                    Welcome to COVID-19 Fundraiser Analytics
                </bs.Card.Title>
                <bs.Card.Body style={{textAlign: "center"}}>
                    COVID-19 Fundraiser Analytics mission is to help all those affected by COVID-19. We strive to present our clients with up-to-date data 
                    and analytics to help create a successful campaign.We have a Campaign Success Calculator to help you create the campaign of your dreams!
                </bs.Card.Body>
            </bs.Card>
        </bs.CardGroup>
        // <bs.Container fluid className="p-0 text-center">
        //     <p>COVID-19 Fundraiser Analytics mission is to help all those affected by COVID-19. We strive to present our clients with up-to-date data 
        //         and analytics to help create a successful campaign. 
        //     </p>
        //     {/* <bs.Col style={{ paddingTop:"4rem"}}>
        //         <h4>About Us</h4>
        //         <i className="fas fa-user-nurse" style={{
        //             fontSize: "14rem",
        //             color: "darkgrey",
        //             marginBottom: "1rem"
        //         }}></i>
        //         <br></br>
        //         <bs.Button variant="primary" style={{marginBottom:"0.5rem"}}>Primary</bs.Button>
        //         <br></br>
        //         <bs.Button variant="secondary">Secondary</bs.Button>
        //     </bs.Col> */}
        // </bs.Container>
    )
}