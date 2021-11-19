import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("Lowecase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCapitalClick = () => {
    let firstchar = text.charAt(0);
    let newText = firstchar.toUpperCase();
    setText(newText + text.slice(1));
  };
  const handleOnChange = (event) => {
    // console.log("onchange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>
          Capitalize first character
        </button>
      </div>
      <div className="container my-3">
        <h1>your text has</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes needed to read </p>
      </div>
    </>
  );
}
