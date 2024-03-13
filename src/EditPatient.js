import { useState,useEffect } from "react";
import axios from "axios";


const EditPatient=({patientId,onClose,onUpdate})=>{
    const [patientdata,setPatientData]=useState({

    });
    useEffect(()=>{
        const fetchPatientData=async ()=>{
            try {
                //based on patient id fetching the details
                const response=await axios.get(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`,patientdata);
                

            }
            catch(error){
                console.error('error in fetching the data for changing',error);
            }
        }
        fetchPatientData();
        },[patientId]);

        const handleUpdate=async ()=>{
            try{
                await axios.put(`https://backendhospital-ji3g.onrender.com/patients/${patientId}`,patientdata);
                onClose();
                onUpdate();
            }
            catch(error){
                console.log('error updating patient info:',error);
            }
        }
        

        const handleChange=(e)=>{
            const {name,value}=e.target;
            setPatientData({...patientdata,[name]:value});
        }
    
    
    return(
        <div>
            <h2>Edit Patient</h2>
            <label>Name:</label>
            <input type="text" name="name" value={patientdata.name|| ''} onChange={handleChange}/>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    )
}
export default EditPatient;