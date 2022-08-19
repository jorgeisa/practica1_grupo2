import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios';


const url = "http://localhost:3000/"

export default function Raiz() {
    const [val,setVal] = useState("");
    const [resultado, setResultado] = useState("");

    async function enviar() {
        const URL = url+"raiz/"+val 
        const { data } = await axios.get(URL)
        setResultado(data.mensaje)
    }

    return (
        <Form>
            <Container>
                <Row>
                    <Col>
                        <div class="p-3 mb-2 bg-dark text-white">
                            <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>Funcion Raiz Cubica</Form.Label></center>
                            <Form.Control type="text" placeholder="Numero" onChange={e=>setVal(e.target.value)} /> <br/>
                            <Button variant="success" onClick = {()=> (enviar())} > Calcular</Button>
                            <center> <Form.Label style={{ color: 'white' }} column="lg" lg={10}>Solucion</Form.Label></center>
                            <Form.Control type="text" placeholder="Resultado" value = {resultado} /> <br/>
                        </div>
                    </Col> 
                </Row>
            </Container>
        </Form>
    )
}