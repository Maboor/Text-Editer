import React,{ useState } from 'react'

export default function TextMain(props){
    const [text, setText] = useState('');
   
    const handleToUp = () =>{
       let newText = text.toUpperCase();
       setText(newText);
    }
    const handleOnChange = (event) =>{
       setText(event.target.value);
    }
    const handleToLower = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleToClear = () =>{
        setText('');
    }
    const handleToCopy = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        navigator.clipboard.writeText(text.value);
    }
    const handleToExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return(
        
        <>
      
      <div className="mb-3">
        <h2 style={{color : props.mode === 'light' ? 'black' : 'white'}}>Enter the text to analyze below</h2>
         <textarea className={`form-control bg-${props.textAreaBg}`} onChange={handleOnChange} style={{color : props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" value={text}  placeholder='Enter the Text here' rows="7"></textarea>
      </div>
        <div className="container my-3">
            <button className={`btn btn-${props.mode === "success" ? 'success' : 'primary'} my-2 mx-2`} onClick={handleToUp} >Convert to Uppercase</button>
            <button className={`btn btn-${props.mode === "success" ? 'success' : 'primary'} my-2 mx-2`} onClick={handleToLower} >Convert to Lowercase</button>          
            <button className={`btn btn-${props.mode === "success" ? 'success' : 'primary'} my-2 mx-2`} onClick={handleToExtraSpace} >Remove extra spaces</button>
            <button className={`btn btn-${props.mode === "success" ? 'success' : 'primary'} my-2 mx-2`} onClick={handleToCopy} >Copy</button>
            <button className={`btn btn-${props.mode === "success" ? 'success' : 'primary'} my-2 mx-2`} onClick={handleToClear} >Clear</button>
        </div>
        <div className="container my-4" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} read minutes</p>
            <h4>Preview your text</h4>
            <p>{text}</p>
        </div>
        </>
    )
}