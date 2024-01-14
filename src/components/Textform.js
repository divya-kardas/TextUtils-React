import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase","success");

  };

  const handleClClick = () => {
    setText("");
    props.showAlert("Cleaned text box","success");

  };

  const handleCopy=()=>{
   
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success");

  }

  const handleRemoveSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              className="form-control my-3"
              value={text}
              onChange={handleOnChange}
             // style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
              id="myBox"
              rows="8" 
              >
            </textarea>
            </div>
          <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>
            Convert into Uppercase
          </button>
          <button  disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>
            Convert into Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleClClick}>
            Clear Text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
            Copy text
          </button>
          <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleRemoveSpace}>
            Remove extra spaces
          </button>
        </div>

      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>
         {text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter(word => word !== '').length} minutes to read the text</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview Please enter the text above textbox"}</p>
      </div>
    </>
  );
}