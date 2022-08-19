
import React, {  useState , useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/esm/Container';
import {Link, Route} from "wouter"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Alreves from './componentes/alrevez'
import Division from './componentes/division'
import Fibo from './componentes/fibo'
import Multi from './componentes/multiplicacion'
import Parimpar from './componentes/paroimpar'
import Potencia from './componentes/potencia';
import Raiz from './componentes/raiz';
function App() {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
                    <Navbar.Brand > &nbsp; &nbsp; Practica 1 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"  >
                    </Navbar.Collapse>
                </Navbar>
                <br />
      <Container>
      <Route exact path ="/" component={Alreves}></Route>
      <Route exact path ="/" component={Division}></Route>
      <Route exact path ="/" component={Multi}></Route>
      <Route exact path ="/" component={Fibo}></Route>
      <Route exact path ="/" component={Parimpar}></Route>
      <Route exact path ="/" component={Potencia}></Route>
      <Route exact path ="/" component={Raiz}></Route>
      </Container> 
                </>
  );
}

export default App;
