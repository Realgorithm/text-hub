import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared successfully", "success");
  };
  const handleBoldClick = () => {
   document.getElementById("textBox").style.fontWeight = "bold";
    
    props.showAlert("Converted to Bold Text", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied successfully", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed Successfully", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            id="textBox"
            rows="9"
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(9 60 98)" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary my-2"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary my-2"
          disabled={text.length === 0}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={handleBoldClick}
        >
          Bold Text
        </button>
        <button
          className="btn btn-primary my-2"
          disabled={text.length === 0}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-3 my-2"
          disabled={text.length === 0}
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.005 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes take to read whole content
        </p>
        <h3>Preview</h3>
        <p className="border border-primary border-2">
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview your content"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
