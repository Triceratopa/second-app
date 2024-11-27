import React, { useState } from "react";
import { Form } from "react-bootstrap";
function Search (){
    const [value, setValue]= useState('')
    function HandleInput (event){
        console.log (event.target.value)
        setValue(event.target.value)
    }
    function handleClick (event){
        console.log (event.target.value)
        setValue(event.target.value)
    }



    return(
        <>
        <Form.Label htmlFor="titleBook"></Form.Label>
        <Form.Control
          type="text"
          id="titleBook"
          onChange={HandleInput}
          value={value}
         
        />
        <button onClick={handleClick}>Search</button>
       
      </>
    )
}
export default Search
