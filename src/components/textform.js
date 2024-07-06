import React, { useState } from "react"
export default function TextForm(props) {
 
  const [text, setText] = useState("");
  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };
  const handleupChange = (event) => {
    setText(event.target.value);
  };
  const handleupClick2 = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };
  const handleClearClick = () => {
    let newText = "";
      setText(newText);
      props.showAlert("Text is cleared","success")
  };
  const SplitText = () => {
    let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces are trimmed","success")
  };
  const HandleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success")
  };
  return (
    <>
      <div
        className="container"
        style={{color:props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleupChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleupClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={handleupClick2}
        >
          Convert To LowerCase
        </button>
        <button
          type="button"
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={SplitText}
        >
          Trim Spaces
        </button>
        <button
          disabled={text.length===0}
          type="button"
          className="btn btn-primary mx-2 my-1"
          onClick={HandleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Nothing to Preview":text}</p>
      </div>
    </>
  );
}
