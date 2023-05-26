import React,{useState} from 'react'

export default function Textbox(props) {
    const[text,setText] = useState(" ");

    const upClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleChange = (event) =>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="conatiner">
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><strong>{props.heading}</strong></label>
        <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={upClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={lowClick}> Convert to Lowercase</button>

      
    </div>
    <div className="container my-3">
        <h2> Your Text Summary </h2>
        <p> {text.split(" ").length-1} and {text.length} characters </p>
        <h3> Preview : </h3>
        <p> {text} </p>
    </div>
    </>
  )
}
