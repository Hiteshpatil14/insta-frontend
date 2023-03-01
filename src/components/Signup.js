import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import M from "materialize-css"
import Toast from 'react-bootstrap/Toast';


import "./signin.css"
function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [showA, setShowA] = useState(false);
  const postdata=()=>{
    M.toast({html: 'I am a toast!'})
      fetch("http://localhost:5000/signup",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,email,password
        })
      }).then(resp=> resp.json()).then((p)=>{
        if(p.error){
       setShowA(true)
      }
        })
         
      
      // .then((e)=>{
      //  console.log(e)
      // })
      // .then(data=>{
      //   if(!data){
      //    console.log("no response from server")
      //   }
      //   else if(data.error){
      //     console.log(data.error)
      //   }
      //   else{
      //     console.log(data.message)
      //   }
      // })
  }
  return (
    <>
   { showA && <> <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
    </>
}
    <Form className='signinform'>
      <div className='text'>
        <h1>Instagram</h1>
      </div>
      <Form.Group className="mb-3 email" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{
         setName(e.target.value)
        }} placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3 email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{
         setEmail(e.target.value)
        }}  placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{
         setPassword(e.target.value)
        }}  placeholder="Password" />
      </Form.Group>

      <Button style={{ marginLeft: "15px", marginTop: "20px" }} onClick={()=>{
        postdata()
      }} variant="primary">
        Sign Up
      </Button>
    </Form>
    </>
  )
}

export default Signup
