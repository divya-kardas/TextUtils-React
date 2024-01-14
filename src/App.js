import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
const [mode, setMode]= useState('light');

const [alert, setAlert]= useState(null);

const showAlert = (message,type)=>{
       setAlert({
        msg:message,
       type:type
       })
       setTimeout(() => {
        setAlert(null);
       },1500);
    }
 const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been ebaled","success");
      document.title="TextUtils Dark mode"
    //   setInterval(()=>{
    //     document.title="TextUtils is amazing"
    //   },2000);
    //   setInterval(()=>{
    //     document.title="Install TextUtils Now"
    //   },1500); to belking the title to atract the user
     }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been ebaled","success");
      document.title="TextUtils Light mode"

    }
  };



  return (
    <>
      <Router>
    <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Textform heading="Enter the your text for analyze below" showAlert={showAlert}  mode={mode}/> */}
    <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter the your text for analyze below" showAlert={showAlert}  mode={mode}/>}>
            </Route>
    </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;



// react do's the partially matching for exact match you need to write excat keyword before the path
// /users--> component1
// /users/home -->component2
