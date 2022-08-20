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

export default function Alreves() {
    const [val,setVal] = useState("");
    const [resultado, setResultado] = useState("");

    async function enviar() {
        const URL = url+"alreves/"+val 
        const { data } = await axios.get(URL)
        setResultado(data.mensaje)
    }

    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <div class="p-3 mb-2 bg-dark text-white">
                            <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>Funcion Alreves</Form.Label></center>
                            <Form.Control type="text" placeholder="Palabra" onChange={e=>setVal(e.target.value)} /> <br/>
                            <Button variant="info" onClick = {()=> (enviar())} > Enviar Palabra</Button>
                            <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>Resultado</Form.Label></center>
                            <Form.Control type="text" placeholder="Palabra" value = {resultado} /> <br/>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </Form>
    )
}