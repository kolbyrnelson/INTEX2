import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterContainer from './footer';
import HeaderContainer from './header';
import LeftContainer from './leftContainer';
import RightContainer from './rightContainer';
import Home from './home';
import Help from './help';
import About from './about';
import Category from './category';
import Details from './details';
import Search from './search';
import Checkout from './checkout';
import Receipt from './receipt';
import Filtered from './filtered';

export default function App(props) {
return (
        <Router>
          <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
            <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm navbar" style={{paddingBottom:"50px"}}>
                <HeaderContainer />
            </bs.Row>
            <bs.Row noGutters className="flex-grow-1">
              <bs.Col md="2" className="px-3 py-4 shadow" style={{backgroundColor:"paleturquoise"}}>
                <LeftContainer />
              </bs.Col>
              <bs.Col md="8">
                <Switch onUpdate={() => window.scrollTo(0, 0)}>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/search">
                    <Search />
                  </Route>
                  <Route path="/help">
                    <Help />
                  </Route>
                  <Route path="/checkout">
                    <Checkout />
                  </Route>
                  <Route path="/receipt">
                    <Receipt />
                  </Route>
                  <Route path="/searchResults">
                    <Filtered />
                  </Route>
                  <Route path="/category/:cid">
                    <Category />
                  </Route>
                  <Route path="/details/:id">
                    <Details />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </bs.Col>
              <bs.Col md="2" className="shadow" style={{backgroundColor:"lightblue"}}>
                  <RightContainer />
              </bs.Col>
            </bs.Row>
            <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
              <FooterContainer />
            </bs.Row>
          </bs.Container>
        </Router>
  );
}