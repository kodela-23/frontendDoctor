import React, { useEffect, useState } from "react";
import axios from "axios";
function Doctor(){
    const [doctors,setDoctors]=useState([]);
    //mount pahse is functional component useeffect after componen rendering the doctor details are rendered..
    useEffect(()=>{
        //get action by axios
        const fetchDoctors=async ()=>{
            try {
                //bringing the doctor details..
                const response =await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
                //intially in doctors no details
                setDoctors(response.data);
                //doctors details are bought in ui(get or retreived)..
            }
            catch(error){
                console.log("Error in fetching the doctors",error);
            }
            

        }
        fetchDoctors();//calling the funcyion
        

    },[]);
    return(
        <div>
            <center>
            <h2>Doctors</h2>
            {
                doctors.map(doctor=>(
                    <div key={doctor.id}>
                        <p><strong>{doctor.name}</strong>={doctor.specilalisation}</p>
                        <p>doctor Id:{doctor.id}</p>
                    </div>
                ))
            }
            </center>
        </div>
    )
}
export default Doctor;