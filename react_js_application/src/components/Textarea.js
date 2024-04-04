import React, { useState } from 'react'


export default function Textarea_func(props) {

    //# States and variables
    const [text, setText]= useState("This is the state text")
    let new_text = text.toUpperCase();

    //~ Function for setting text to new_text valur.
    function hangover () {
        return ( setText(new_text));
    }

    //* Function for getting the input value and setting text to input value

    function changeover (event) {
        return (setText(event.target.value));
    }

    
    
  return (
    <div>
        <h1>{props.label}</h1>
        <div className="mb-3">
    //% Setting the value of text area to text state and calling changeover function upon input change
        <textarea value={text} onChange={changeover} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea> <br />
        <button className='btn btn-primary' onClick={hangover}>Convert to Capital</button>
        </div>
    </div>
  )
}
