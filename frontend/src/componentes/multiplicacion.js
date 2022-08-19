import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Route } from "wouter"

const url = "http://localhost:3000/"

export default function Multi() {
    const [val,setVal] = useState("");
    const [val2,setVal2] = useState("");
    const [resultado, setResultado] = useState("");

    async function enviar() {
        const URL = url+"multiplicacion/"+val +"/"+val2
        const { data } = await axios.get(URL)
        setResultado(data.resultado)  
    }

    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <div class="p-3 mb-2 bg-dark text-white">
                        <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>Funcion Multiplicacion</Form.Label></center>
                        <Row>   
                            <Form.Control type="text" placeholder="Numero 1" onChange={e=>setVal(e.target.value)} /> <br/>
                            <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>*</Form.Label></center>
                            <Form.Control type="text" placeholder="Numero 2" onChange={e=>setVal2(e.target.value)} /> <br/>
                        </Row>
                        <br/>
                            <Button variant="danger" onClick = {()=> (enviar())} >Multiplicar</Button>
                            <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>Solucion</Form.Label></center>
                            <Form.Control type="text" placeholder="Resultado" value = {resultado} /> <br/>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </Form>
    )
}