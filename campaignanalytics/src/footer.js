import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBFooter } from "mdbreact";

export default function FooterContainer(props){
    return (
        <MDBFooter color="blue" className="font-small" style={{width:"100%", backgroundColor:"lightgrey"}}>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <Link to="/" style={{fontSize:"100%"}}>COVID-19 Fundraiser Analytics</Link>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}