import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("Enter Text Here");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const buttonUpClicked = ()=>{
    // console.log('clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const buttonLoClicked = ()=>{
    // console.log('clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const textChanged = (event)=>  {
    // console.log('text changed');
    setText(event.target.value);
  }
  const buttonBoldClicked = ()=>{
    // let newText = text.toLowerCase();
    // setText(newText);
    setIsBold(!isBold);
    props.showAlert("Text Bolded","success");
  }
  const buttonItalClicked = ()=>{
    setIsItalic(!isItalic);
    props.showAlert("Text Italic","success");
  }
  const buttonUnderClicked = ()=>{
    setIsUnderline(!isUnderline);
    props.showAlert("Text Underlined","success");
  }
  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            value={text}
            onChange={textChanged}
            style={textStyle}
          ></textarea>
          {/* <label htmlFor="floatingTextarea"></label> */}
        </div>
        <button className="btn btn-success my-4" onClick={buttonUpClicked}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success my-4 mx-2" onClick={buttonLoClicked}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success my-4 mx-2" onClick={buttonBoldClicked}>
          <b>B</b>
        </button>
        <button className="btn btn-success my-4 mx-2" onClick={buttonItalClicked}>
          <i>I</i>
        </button>
        <button className="btn btn-success my-4 mx-2" onClick={buttonUnderClicked}>
          <u>U</u>
        </button>
      </div>
      <div className='container'>
        <h1>Your Summary Here</h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
