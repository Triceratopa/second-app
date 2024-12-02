import React, {Component} from "react";
import SingleBook from "./SingleBook";
import books from '../books/fantasy.json'
import { Col, Row } from "react-bootstrap";
import Search from "./Search";
import CommentArea from "./CommentArea";

class BookList extends Component   {
    state={
        selectedBook: null,
        selectedComment: [],
    }
    /*aggiorno il libro selezionato*/
     handleBookSelect = (asin,comment) =>{
        this.setState({selectedBook:asin, selectedComment:comment})
     }
render(){
    const limited= books.slice(0,4)
    return(


    
    
        <Row>
            <Col xs={12} md={6}>
        <Row >
            
            {limited.map((book)=>(<SingleBook key={book.asin} book={book} onBook={this.handleBookSelect}
            selected={book.asin === this.state.selectedBook} onSelected={this.handleBookSelect}/>)
        )}
        
            </Row>
            </Col>
            <Col xs={12} md={6}>
            <CommentArea bookId={this.state.selectedBook} comment={this.state.selectedComment}/></Col>
            </Row>
    )    
}
}
export default BookList