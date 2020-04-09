import React from 'react';
import './App.scss';
// import AppContext from './context';
import { Link } from 'react-router-dom';
import * as bs from 'react-bootstrap';

export default function HeaderContainer(props){
    // const context = React.useContext(AppContext);
    return (
        <bs.Navbar bg="light" expand="lg" style={{width:"100%"}} fixed='top'>
            <Link to="/">
                <bs.Navbar.Brand>
                    <img src={'../Images/analytics.ico'} alt="vial" style={{maxHeight:"2rem"}}/>
                    COVID-19 Fundraiser Analytics
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                </bs.Nav>
                <bs.Nav>
                    <Link to="/analytics" className="nav-link">Campaign Success Calculator</Link>
                </bs.Nav>
                <bs.Nav>
                    <Link to="/search" className="nav-link"><i className="fas fa-search"></i>  Search</Link>
                </bs.Nav>
                <bs.Nav>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}