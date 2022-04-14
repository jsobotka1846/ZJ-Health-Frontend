import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Reviews = () => {


    const [appointments, setAppointments] = useState();
    const navigate = useNavigate();
    let appts = [];

    useEffect(() => {
        if (Cookies.get("JSESSIONID") == null) {
          navigate("/login");
        }
        else {
          axios.get("https://zjhealth.herokuapp.com/api/user/role", {
              withCredentials: true
          }).then((response) => {
              let role=response.data;
              if (role!="administrator") {
                  navigate("/");
              }
          })
        }
        axios.get("https://zjhealth.herokuapp.com/api/appointment/admin/reviews", {
            withCredentials: true,
          })
          .then((response) => {
            for (let appt of response.data) {
              appts.push(
                <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
                  <div className="card-body">
                    <h5 className="card-title text-light">Appointment</h5>
                    <p className="card-text text-light">
                      Patient: {appt.patient.firstName} {appt.patient.lastName}
                      <br />
                      Doctor: {appt.doctor.firstName} {appt.doctor.lastName}
                      <br />
                      Appointment Type: {appt.type}
                      <br />
                      Review Rating: {appt.rating}
                      <br />
                      Review Comment: {appt.review}
                      <br />
                      Type: {appt.type}
                      <br />
                      {appt.date}
                    </p>

                  </div>
                </div>
              );
            }
    
            setAppointments(appts);
          });
      }, []);


    return (
        <div className="profile">
      <div className="mt-5">

        <br />
        <h2 className="text-center" style={{ color: "navy" }}>
          Appointment Reviews
        </h2>
        {appointments}

        <hr />
      </div>
    </div>

      );
}
 
export default Reviews;