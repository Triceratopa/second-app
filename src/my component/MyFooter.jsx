import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function MyFooter() {
    return (
      <ListGroup horizontal className="fixed-bottom justify-content-center">
        <ListGroup.Item>Home</ListGroup.Item>
        <ListGroup.Item>Book List</ListGroup.Item>
        <ListGroup.Item>About</ListGroup.Item>
        <ListGroup.Item>Service</ListGroup.Item>
      </ListGroup>
    );
  }
  
  export default MyFooter;