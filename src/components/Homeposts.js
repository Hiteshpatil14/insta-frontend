import React from 'react'
// import Button from 'react-bootstrap/Button';
import {FcLike} from "react-icons/fc"
import {FaRegComment} from "react-icons/fa"
import "./homepost.css"
import Card from 'react-bootstrap/Card';
function Homeposts() {
  return (
        <>
        <Card className='cardbox' >
            <Card.Title style={{fontSize:"2em", margin:"10px 10px"}} className='postheading'>Card Title</Card.Title>
            
          <Card.Img variant="top" className='cardimage' src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHdhbGxwYXBlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <Card.Body>
            <span className='likeicone'><FcLike/></span><span className='commenticone'><FaRegComment /></span>
            
            <Card.Text className='body'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        
        </>

  )
}

export default Homeposts
