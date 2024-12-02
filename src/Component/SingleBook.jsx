import React, { Component } from "react";
import { Button, Card,Col, Form, ListGroup } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    sigleComment:[],
    comment:'',
  }
  getComment=()=>{
    fetch('https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}',{
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzUwYTA2ZmM4YzAwMTU2Yjg3MDEiLCJpYXQiOjE3MzI4MDE4MDIsImV4cCI6MTczNDAxMTQwMn0.BKqm3hYQggiiqZICiu-ELSytLgQHwe1ph01SRzMX6sQ'
      }
    })
    .then((res)=>{
      if(res.ok){
        return res.json()
      } else {
        throw new Error ('Errore recensione')
      }
    })
    .then ((comments)=>
    this.setState({
      sigleComment: comments,
    }))
    .catch((err)=>{
      console.log(err)})
  }
  postComment=()=>{
    const newComment={
      comment: this.state.comment,
      rate:5,
      elementId: this.props.book.asin,
    }
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization':
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzUwYTA2ZmM4YzAwMTU2Yjg3MDEiLCJpYXQiOjE3MzI4MDE4MDIsImV4cCI6MTczNDAxMTQwMn0.BKqm3hYQggiiqZICiu-ELSytLgQHwe1ph01SRzMX6sQ",
      },
      body: JSON.stringify(newComment),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Errore nel salvataggio del commento');
      }
    })
      .then(() => {
        
          this.getComment(); 
          this.setState({ comment: "" })
        
      })
      .catch((err) => console.log("Errore:", err));
  };
  

  
  componentDidMount(){
    this.getComment()
  }


  render(){
    return (
      
     
      <Col  >
          <Card style={{ margin: '1em', border: this.state.selected?'3px solid blue' : ''}}>
          <Card.Img 
          onClick={()=>{
            this.setState({
              selected:!this.state.selected,
              

            })
            this.props.onBook(this.props.book.asin)
          }}
          variant="top" src={this.props.book.img} alt={this.props.book.title} style={{height:'100v', objectFit:"cover"}} />
          <Card.Body>
            <Card.Title >{this.props.book.title}</Card.Title>
            <Card.Text>
             Price €{this.props.book.price}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
         
          </Card.Body>
        </Card>
        </Col>
      
     
    );
  }
}
  
  export default SingleBook