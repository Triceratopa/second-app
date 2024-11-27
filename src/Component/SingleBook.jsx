import React from "react";
import { Button, Card,Col } from "react-bootstrap";

const SingleBook= ({book}) =>{
    return (
      
     
      <Col xs={12} md={4} >
          <Card style={{ margin: '1em'}}>
          <Card.Img variant="top" src={book.img} alt={book.title} style={{height:'100v', objectFit:"cover"}} />
          <Card.Body>
            <Card.Title >{book.title}</Card.Title>
            <Card.Text>
             Price €{book.price}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        </Col>
      
     
    );
  }
   
  
  export default SingleBook