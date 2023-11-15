import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("success");
  const [alert, setAlert] = useState(null);
  const [lightMd, DarkMd] = useState("DarkMode");
  let showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  };

  let toggleMode = ()=>{
    if(mode === "success"){
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled","success");
      DarkMd("LightMode");
      document.title = "Usman App - DarkMode"
    } else {
      setMode("success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled","danger");
      DarkMd("DarkMode");
      document.title = "Usman App - LightMode"
    };
  };
  return (
    <>
    <Router>
      <Navbar title="Usman's App" link="About Us" mode={mode} toggleMode={toggleMode} lightMd={lightMd}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Textform heading="Enter Your Text Here" showAlert={showAlert}/>
              </Route>
        </Switch>
      {/* <About /> */}
      </div>
    </Router>
    </>
  );
} 

export default App;