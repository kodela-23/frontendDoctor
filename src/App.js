import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Doctor from "./Doctor";
import Patient from "./Patient";
import Navigate from "./Navigate";
import EditPatient from "./EditPatient";
function App(){
  return(
    <>
    <BrowserRouter>
        <Navigate/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/doctor" element={<Doctor/>}/>
                <Route path="/patient" element={<Patient/>}/>
                <Route path="/editpatient" element={<EditPatient/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;