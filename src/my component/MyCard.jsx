import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasy from '../books/fantasy.json'
import { Component } from 'react';

class MyCard extends Component {
    render(){
  return (
   <div className='d-flex flex-wrap'> {fantasy.map((book)=>(
        <Card style={{ width: '18rem', margin: '1em' }} key={book.asin}>
        <Card.Img variant="top" src={book.img} alt={book.title}/>
        <Card.Body>
          <Card.Title >{book.title}</Card.Title>
          <Card.Text>
           Price €{book.price}
          </Card.Text>
          <Button variant="primary">Add Chart</Button>
        </Card.Body>
      </Card>
    ))}
   </div>
  );
}}
export default MyCard
