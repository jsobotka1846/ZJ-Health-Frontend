import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
    const [appointments, setAppointments] = useState();
    let appts = [];
    useEffect(() => {
        
        axios.get("http://localhost:8080/api/appointment/user/appointments", {
            withCredentials: true
        })
            .then(response => {
                
                for (let appt of response.data) {
                    appts.push(
                        <div className="card text-center bg-primary border border-dark border-5">
                            <div className="card-body">
                                <h5 className="card-title text-light">Appointment</h5>
                                <p className="card-text text-light">{appt.doctor.firstName}</p>
                                <p className="card-text text-light">Time/date</p>
                                <a href="#" className="btn btn-primary border btn-outline-danger text-light">Cancel Appointment</a>
                                <a href="#" className="btn btn-primary border btn-outline-success text-light">Review Appointment</a>
                            
                            </div>
                        </div>
                    );
                            
                }
                
                setAppointments(appts);

            })   

    }, [])

    return ( 
        <div className="profile" >
            <div className="mt-5" >
            
                <h1 className="text-center" style={{color: "navy"}}>Welcome</h1>
                <br />
                <h2 className="text-center" style={{color: "navy"}}>Current Appointments</h2>
                <p className="text-center"><a href="#" className="btn btn-outline-success">Create New Apppointment</a></p>
                <hr />
            </div>
            {appointments}
        
        
    </div>
    

     );
}
 
export default Profile;

