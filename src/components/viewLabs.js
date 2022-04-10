import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ViewLabs = () => {
    const [viewLabs, setViewLabs] = useState();
    const [viewForm, setViewForm] = useState();
    const navigate = useNavigate();

    const submitResult = (e, id) => {
        e.preventDefault();
        const result = e.target.result.value;
        const req = { result, id };
        fetch("https://zjhealth.herokuapp.com/api/lab/update/result", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req),
            credentials: "include",
        }).then(() => {
                setViewForm(null);
                window.location.reload();
            });


    }


    const updateResult = (id) => {
        setViewForm(
            <div className="container">
                <div
                className="review"
                style={{ top: window.scrollY + 150, right: 20 }}
                >
                <button
                    onClick={() => setViewForm(null)}
                    className="btn btn-primary close"
                >
                    X
                </button>
                <h5>Update Lab Result</h5>
                <hr />
                <form onSubmit={(e) => submitResult(e, id)}>
                    
                    <input type="text" name="result" placeholder="Result" required />
                    <br />
                    <input type="submit" value={"Submit"} className="btn btn-primary" />
                </form>
                </div>
            </div>

        );

    }

    useEffect(() => {
        if (Cookies.get("JSESSIONID") == null) {
            navigate("/login");
        }
        else {
            axios.get("http://localhost:8080/api/user/role", {
                withCredentials: true
            }).then((response) => {
                let role=response.data;
                if (role!="doctor") {
                    navigate("/");
                }
            })
        }
        axios.get("http://localhost:8080/api/lab/view/labs", {
            withCredentials: true,
        }).then((response) => {
          let labs = [];
          for (let lab of response.data) {
            labs.push(
                <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
                <div className="card-body">
                <h5 className="card-title text-light">Lab</h5>
                <p className="card-text text-light">
                    Date Scheduled: {lab.date}
                    <br />
                    Patient: {lab.patientFName} {lab.patientLName}
                </p>

                
                {lab.result == null && (
                    <button
                    onClick={() => updateResult(lab.id)}
                    className="btn btn-primary border btn-outline-success text-light"
                    >
                    Update Result
                    </button>
                )}
                </div>
            </div>
            );
          }
          setViewLabs(labs);
      })
    }, [])
    return (
        <div className="profile">
            <div className="mt-5">
                {viewForm}
                <br />
                <h2 className="text-center" style={{ color: "navy" }}>
                Labs You Scheduled
                </h2>
                
                <hr />
                {viewLabs}
            </div>
        </div>
      );
}
 
export default ViewLabs;