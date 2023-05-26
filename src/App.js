import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const[alert,setAlert] = useState({
    message : "no intial message ",
    type : "primary"
  });

  const showAlert = (msg,ty) => {
    setAlert({
      message :msg,
      type : ty
    })
  }

  return (
    <>
      <Router>
      <Navbar title="text-utils" aboutText="About US"/>
      <Alert alert={alert}/>
      <Routes>
      <Route exact path="/" element={<div className="container my-3"><Textbox heading=" Enter text to analyze : "/> </div>} />
      <Route exact path="about/*" element={<div className="container my-3"><About showAlert={showAlert}/></div>} />

      </Routes>
      </Router> 
    </>
  );
}

export default App;
