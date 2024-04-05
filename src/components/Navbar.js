import React from 'react'

 export default function Navbar(props){
    return(
       <>
       <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
       <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode === "light" ? 'dark' : 'light'}`} href="#">Text Editer</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === "light" ? 'dark' : 'light'}`} aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <button type="button" className={`btn text-${props.mode === "light" ? 'dark' : 'light'} btn-sm`} onClick={props.toggleMode}>{props.darkModeText}</button>
      <button type="button" className={`btn text-${props.mode === "light" ? 'dark' : 'light'} btn-sm`} onClick={props.greenToggleMode}>{props.successModeText}</button>
     </div>
  </div>
</nav>
       </>

    )
}