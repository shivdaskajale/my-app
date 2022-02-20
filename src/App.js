
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(5, 41, 55)';
      showAlert("Dark mode has been enabled", "success");
      document.title='my-app - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title='my-app - Light Mode';
    }
  }
  return (
    <>    
    {/* <Navbar title="my-app" aboutText="Aboutus"/> */}
    {/* <Router> */}
    <Navbar title="my-app" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route> */}
        {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
