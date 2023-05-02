import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [posterURL,setPosterURL]=useState('')
    const [rating,setRating]=useState(0)
    const addmov=()=>
        setMovies([...movies,{title, description, posterURL, rating, id: Math.random()}])
    
    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        Add a Movie !
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie !</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Poster</Form.Label>
        <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="Enter poster URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rating</Form.Label>
        <Typography component="legend"></Typography>
      <Rating
        onChange={(e)=>setRating(e.target.value)}
      />
      </Form.Group>
    
        
      
    </Form></Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={(e)=>{addmov();handleClose()}} variant="primary" >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>

        
    )
}

export default AddMovie