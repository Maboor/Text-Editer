import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import TextMain from './components/TextMain';

function App() {
   const [mode, setMode] = useState("light");
   const [darkModeText, setdrkbtn] = useState("Blue mode off");
   const [greenModeTxt, setGreenModeTxt] = useState("Green mode off");
   const [textAreaBg, setTextAreaBg] = useState("light");

   const toggleMode = () =>{
    if(mode === "light"){
      setMode("primary");
      document.body.style.backgroundColor = "#1454b2";
      setTextAreaBg("primary");
      setdrkbtn("Blue mode on")
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      setdrkbtn("Blue mode off")
      setTextAreaBg("light");
    }
   }
   const greenToggleMode = () =>{
    if(mode === "light"){
      setMode("success");
      document.body.style.backgroundColor = "#00944f";
      setGreenModeTxt("Green mode on");
      setTextAreaBg("success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      setGreenModeTxt("Green mode off");
      setTextAreaBg("light");
    }
   }
  return (
   <>
   <Navbar mode={mode} toggleMode={toggleMode} greenToggleMode={greenToggleMode} darkModeText={darkModeText} successModeText={greenModeTxt}/>
   <div className="container my-4">
     <TextMain mode={mode} textAreaBg={textAreaBg}/>
   </div>
   
   </>
  );
}

export default App;
