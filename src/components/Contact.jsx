import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-white text-center my-6">
          Cuentános, ¿en qué te podemos ayudar?
    </h1>
        <div className='form'>
        <Form className='form-email'>
            <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3 text-white" controlId="exampleForm.ControlTextarea1" style={{ width: "700px" }}>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit" className="btn btn-success btn-lg btn-block">
          Enviar
            </Button>
        </Form>
        </div>
       
    </>
  )
}

export default Contact