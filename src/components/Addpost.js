import React from 'react'
import "./addpost.css"
import Button from 'react-bootstrap/Button';

function Addpost() {
  return (
    <div className='addpost'>
        <input type="text" className='titleinput' placeholder='title'/>
        <input type="text" className='bodyinput' placeholder='body'/>
       <div className="file-field input-field filefield">
      <div className="btn">
        <input style={{fontSize:"1.5em"}} type="file"/>
      </div>
      <div className="file-path-wrapper submitbutton">
      <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </div>
    </div>
  )
}

export default Addpost
