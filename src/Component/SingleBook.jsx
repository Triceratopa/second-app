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
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
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
      
     
      <Col xs={12} md={4} >
          <Card style={{ margin: '1em', border: this.state.selected?'3px solid blue' : ''}}>
          <Card.Img 
          onClick={()=>
            this.setState({
              selected:!this.state.selected,

            })
          }
          variant="top" src={this.props.book.img} alt={this.props.book.title} style={{height:'100v', objectFit:"cover"}} />
          <Card.Body>
            <Card.Title >{this.props.book.title}</Card.Title>
            <Card.Text>
             Price €{this.props.book.price}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
            {/*commentArea */}
            {this.state.selected &&(
             <Form>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>{this.props.book.title}</Form.Label>
               
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
               <Form.Label>Lascia qui la tua Recensione</Form.Label>
               <Form.Control  as="textarea" rows={10} placeholder='Recensione...' value={this.state.comment} onChange={(e)=>this.setState({comment:e.target.value})}  />
             </Form.Group>
             <Button
                  variant="success"
                  onClick={this.postComment}
                  disabled={!this.state.comment.trim()}
                >
                  Invia Commento
                </Button>
             <ListGroup>
              {this.state.sigleComment.map((res)=>{
                ( <ListGroup.Item key={res.asin}>{res.comment}</ListGroup.Item>)
              })}
      
 
    </ListGroup>
           </Form>
            )}
          </Card.Body>
        </Card>
        </Col>
      
     
    );
  }
}
  
  export default SingleBook