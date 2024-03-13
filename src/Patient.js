import React, { useState } from "react";
import axios from "axios";
import './App.css';
function Patient(){
    //wrapping all the details in use state or else we use const[name ,setName]=useState('');
    const [patientData,setPatientData]=useState({
        name:'',
        weight:'',
        gender:'',
        age:'',
        disease:'',
        doctorid:null
    })
    //to change the patiendata value
    //e is the random argument
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setPatientData({...patientData,[name]:value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();//submission behavoiur is handled
        try{
            const response=await axios.post('https://backendhospital-ji3g.onrender.com/patients',patientData);
            console.log('patientData is created:',response.data);
        }
        catch(error){
            console.error('error in creating the patient details:',error);

        }

    }
    return(
        <div>
            <h2>Register the patient details</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={patientData.name} onChange={handleChange}/>

                <label>Weight:</label>
                <input type="text" name="weight" value={patientData.weight} onChange={handleChange}/>

                <label>Gender:</label>
                <input type="text" name="gender" value={patientData.gender} onChange={handleChange}/>

                <label>Age:</label>
                <input type="text" name="age" value={patientData.age} onChange={handleChange}/>

                <label>Disease:</label>
                <input type="text" name="disease" value={patientData.disease} onChange={handleChange}/>

                <label>DoctorId:</label>
                <input type="text" name="doctorid" value={patientData.doctorid} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Patient;