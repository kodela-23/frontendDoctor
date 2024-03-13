import React, { useState,useEffect } from "react";
import axios from 'axios';
import EditPatient from './EditPatient'


function Home(){
    const [patients,setPatients]=useState([]);
    const [doctors,setDoctors]=useState([]);
    const [selectedDoctorId,setSelectedDoctorId]=useState(null);
    const[editpatientId,setEditPatientId]=useState(null);
    useEffect(()=>{
        const fetchPatientAndDoctors=async () =>{
            try{
                const patientsResponse=await axios.get('https://backendhospital-ji3g.onrender.com/patients');
                const doctorssResponse=await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
                setPatients(patientsResponse.data);
                setDoctors(doctorssResponse.data);

            }
            catch(error)
            {
                console.log('Error in fetching info',error);
            }
        }
        fetchPatientAndDoctors();
    },[])
    const handleDoctorChange=(event)=>{
        const selectedDoctorId=parseInt(event.target.value);
        setSelectedDoctorId(selectedDoctorId);
    };

    const filteredPatients=setSelectedDoctorId ? patients.filter(patient=>patient.doctor.id=== selectedDoctorId): patients;
    
    const handleEdit=(patientId)=>{
        setEditPatientId(patientId);
    }

    const handleCloseEdit=()=>{
        setEditPatientId(patients);

    }

    //update
    const handleUpdate=()=>{
        setEditPatientId(null);
     }
     const handleDelete=async (patientId)=>{
        try{
            await axios.delete('');
            setPatients((prevPatients)=>prevPatients.filter((patient)=>patient.id==patient));
        }
        catch(error){
            console.error('Error in deleting patient :',error);
        }
        
    }




    return(
        <div>
            <h2>Patient</h2>
            <label>Select Doctor:</label>

            <select onChange={handleDoctorChange}>
                <option value={null}>All Doctors</option>
                {doctors.map((doctor)=>(
                   <option key={doctor.id} value={doctor.id}>
                    {doctor.name}-{doctor.specialization}

                   </option> 
                ))}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Disease</th>
                        <th>Doctor</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredPatients.map((patient)=>{
                            <tr key={patient.id}>
                                <td>{patient.name}</td>
                                <td>{patient.weight}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.age}</td>
                                <td>{patient.disease}</td>
                                <td>{patient.doctor.name}-{patient.doctor.specialization}</td>
                                <td><button onClick={()=>handleEdit(patient.id)}>Edit</button></td>
                                <td><button onClick={()=>handleDelete(patient.id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            {
                editpatientId !== null &&(
                    <EditPatient
                    patientId={editpatientId}
                    onClose={handleCloseEdit}
                    onUpdate={handleUpdate}/>
                )
            }
        </div>
    )
}
export default Home;