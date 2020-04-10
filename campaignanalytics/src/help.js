import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import MailTo from 'react-mailto';

export default function Help() {
    return (
        <bs.Container className="text-center">
            <h3 className="mt-4" style={{color:"#00b964"}}>Contact Us!</h3>
            
                <bs.Row className="text-center mt-4" >
                    <bs.Col></bs.Col>
                    <bs.Col className="text-center" xs={6}>
                        <p>
                            We are here to help. If you have any questions please reach out to us by email. Our email is: <MailTo email="COVID19fundraiseranalytics@gmail.com">COVID19fundraiseranalytics@gmail.com</MailTo>
                        <br></br><br></br><br></br>
                        <i className="fas fa-question-circle" style={{
                            fontSize: "14rem",
                            color: "blue",
                            marginBottom: "1rem"
                        }}></i>
                        </p>
                    </bs.Col>
                    <bs.Col></bs.Col>
                </bs.Row>
         </bs.Container>
    )
}