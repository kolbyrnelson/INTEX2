import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';

export default function Receipt(props) {

    return (
        <bs.Container fluid className="text-center">
            <h3 className="mt-2">Thank you!</h3>
            <h6>Your payment has been processed</h6>
        </bs.Container>
)
}