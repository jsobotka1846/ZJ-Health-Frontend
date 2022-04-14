import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [appointments, setAppointments] = useState();
  const [form, setForm] = useState();
  let appts = [];
  const navigate = useNavigate();

  const submitReview = (e, id) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const req = { rating, review };

    fetch("https://zjhealth.herokuapp.com/api/appointment/review/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
      credentials: "include",
    }).then(() => {
      setForm(null);
      window.location.reload();
    });
  };

  const viewForm = (id) => {
    setForm(
      <div className="container">
        <div
          className="review"
          style={{ top: window.scrollY + 280, right: 10 }}
        >
          <button
            onClick={() => setForm(null)}
            className="btn btn-primary close"
          >
            X
          </button>
          <h5>Appointment Review Form</h5>
          <hr />
          <form onSubmit={(e) => submitReview(e, id)}>
            <input type="number" name="rating" placeholder="Rating Out of 5" required />
            <br />
            <input type="text" name="review" placeholder="Review" required />
            <br />
            <input type="submit" value={"Submit"} className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  };

  const delAppt = (id) => {
    axios
      .delete("https://zjhealth.herokuapp.com/api/appointment/delete/" + id, {
        withCredentials: true,
      })
      .then(() => {
        window.location.reload();
      });
  };

  useEffect(() => {
    let data = false;
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    axios.get("https://zjhealth.herokuapp.com/api/appointment/user/appointments", {
        withCredentials: true,
      })
      .then((response) => {
        for (let appt of response.data) {
          if (appt.doctor != null) {
            appts.push(
              <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
                <div className="card-body">
                  <h5 className="card-title text-light">Appointment</h5>
                  <p className="card-text text-light">
                    Dr. {appt.doctor.firstName} {appt.doctor.lastName}
                    <br />
                    Type: {appt.type}
                    <br />
                    {appt.date}
                    
                  </p>
                  {appt.diagnosis == null && (
                    <button
                      className="btn btn-primary border btn-outline-danger text-light"
                      onClick={() => delAppt(appt.id)}
                    >
                      Cancel Appointment
                    </button>
                  )
                  }
                  {appt.review == null && (
                    <button
                      onClick={() => viewForm(appt.id)}
                      className="btn btn-primary border btn-outline-success text-light"
                    >
                      Review Appointment
                    </button>
                  )}
                </div>
              </div>
            );
          }
        }
        if (!data) {
          setAppointments(appts);

        }
      });
      
      return () => {
        data=true;
      };
  }, []);
  

  

  return (
    <div className="profile">
      <div className="mt-5">
        <h1 className="text-center" style={{ color: "navy" }}>
          Welcome
        </h1>
        {form}
        <br />
        <h2 className="text-center" style={{ color: "navy" }}>
          Patient Appointments
        </h2>
        <p className="text-center">
          <a href="/appointment" className="btn btn-outline-success">
            Create New Apppointment
          </a>
        </p>
        <hr />
      </div>
      {appointments}
    </div>
  );
};

export default Profile;
