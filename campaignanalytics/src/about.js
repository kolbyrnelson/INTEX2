import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';

export default function About() {
    return (
        <bs.Container className="text-center">
            <h3 className="mt-4" style={{color:"#00b964"}}>Welcome to Covid-19 Fundraiser Analytics</h3>
            
                <bs.Row className="text-center mt-4" >
                    <bs.Col></bs.Col>
                    <bs.Col className="text-center" xs={6}>
                        <p>
                            COVID-19 Fundraiser Analytics mission is to help all those affected by COVID-19. We strive to present our clients with up-to-date data 
                            and analytics to help create a successful campaign. 
                        </p>
                        <p>
                            We are a group of BYU Information Systems students that just want to make a difference in the world.
                        <br></br><br></br><br></br>
                        <img alt="IS Logo" src={"../Images/islogo.jfif"}></img>
                        </p>
                    </bs.Col>
                    <bs.Col></bs.Col>
                </bs.Row>
         </bs.Container>
    )
}