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
                    <img src={'../Images/snowflake.ico'} alt="vial" style={{maxHeight:"2rem"}}/>
                    Arctic Retailer
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
                    <Link to="/search" className="fas fa-search nav-link">  Search</Link>
                </bs.Nav>
                <bs.Nav>
                    <Link to="/analytics" className="fas fa-search nav-link">  Analytics</Link>
                </bs.Nav>
                <bs.Nav>
                {   <bs.NavDropdown title="Welcome, Kolby" id="basic-nav-dropdown" alignright="true">
                        <bs.NavDropdown.Item href="#action/3.3">Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown> }
                </bs.Nav>
                {/* <bs.Form inline>
                <bs.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <bs.Button variant="outline-success">Search</bs.Button>
                </bs.Form> */}
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}