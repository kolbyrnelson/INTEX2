import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';

export default function help() {
    return (
        <bs.Card>
            <bs.Card.Title>How Can We Help You?</bs.Card.Title>
            <bs.Card.Body>
                We are here to help. If you have any questions please reach out to us by email. Our email is: "COVID19fundraiseranalytics@gmail.com"
            </bs.Card.Body>
        </bs.Card>
        // <bs.Container fluid className="p-0 text-center">
        //     <bs.Col style={{ paddingTop:"4rem"}}>
        //         <h4>Do you need some help?</h4>
        //         <i className="fas fa-question-circle" style={{
        //             fontSize: "14rem",
        //             color: "blue",
        //             marginBottom: "1rem"
        //         }}></i>
        //         <br></br>
        //         <bs.Button variant="primary" style={{marginBottom:"0.5rem"}}>Primary</bs.Button>
        //         <br></br>
        //         <bs.Button variant="secondary">Secondary</bs.Button>
        //     </bs.Col>
        // </bs.Container>
    )
}