import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';

export default function About() {
    return (
        <bs.Container fluid className="p-0 text-center">
            <bs.Col style={{ paddingTop:"4rem"}}>
                <h4>About Us</h4>
                <i className="fas fa-user-nurse" style={{
                    fontSize: "14rem",
                    color: "darkgrey",
                    marginBottom: "1rem"
                }}></i>
                <br></br>
                <bs.Button variant="primary" style={{marginBottom:"0.5rem"}}>Primary</bs.Button>
                <br></br>
                <bs.Button variant="secondary">Secondary</bs.Button>
            </bs.Col>
        </bs.Container>
    )
}