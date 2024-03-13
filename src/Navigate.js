
import React from "react";
import { Link } from "react-router-dom";
const Navigate=()=>{
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"yellow"}}>
           {/* <a href="#" id="logo">TRUE CARE+</a> */}
            <Link to="/">Home</Link>
            <Link to="/doctor" >Doctor</Link>
            <Link to="/patient" >Patient</Link>
            <Link to="/editpatient" >EditPatient</Link>
            {/* <img src="https://wallpapers.com/images/featured/best-ever-desktop-bgt6dccypy1dfk0c.jpg"/> */}

        </div>
  )
}
export default Navigate;

