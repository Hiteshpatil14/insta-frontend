   import React from 'react'
   import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import "./signin.css"
   function Signin() {
     return (
        <Form className='signinform'>
            <div className='text'>
            <h1>Instagram</h1>
            </div>
            
        <Form.Group className="mb-3 email" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3 password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button style={{marginLeft:"15px",marginTop:"20px"}} variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
     )
   }
   
   export default Signin
   