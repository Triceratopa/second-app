import React from "react";
import SingleBook from "./SingleBook";
import books from '../books/fantasy.json'
import { Row } from "react-bootstrap";
import Search from "./Search";

const BookList = ({books}) => {
    <Search/>

    const limited= books.slice(0,4)
    return (
        
        <Row>
            {limited.map((book)=>(<SingleBook key={book.asin} book={book}/>))}
            </Row>
    )
}
export default BookList