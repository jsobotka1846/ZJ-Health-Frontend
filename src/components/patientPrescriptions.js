import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PatientPrescriptions = () => {
  const [prescList, setPrescList] = useState();
  var prescriptions = [];
  const navigate = useNavigate();

  const createPdf = (id) => {
    axios
      .get("http://localhost:8080/api/prescription/download/" + id, {
        withCredentials: true,
        responseType: "blob",
      })
      .then((response) => {
        const pdf = URL.createObjectURL(
          new Blob([response.data], { type: "application/pdf" })
        );
        window.open(pdf);
      });
  };

  useEffect(() => {
    if (Cookies.get("JSESSIONID") == null) {
      navigate("/login");
    }
    axios
      .get("http://localhost:8080/api/prescription/list/patient", {
        withCredentials: true,
      })
      .then((response) => {
        for (let presc of response.data) {
          prescriptions.push(
            <div className="card text-middle bg-primary border border-dark border-5 mb-3 col-4 mx-auto">
              <div className="card-body">
                <h5 className="card-title text-light">Prescription</h5>
                <p className="card-text text-light">{presc.name}</p>
                <p className="card-text text-light">
                  Prescribed By: Dr. {presc.doctor.firstName}{" "}
                  {presc.doctor.lastName}
                </p>

                <button
                  className="btn btn-primary border btn-outline-success text-light"
                  onClick={() => createPdf(presc.id)}
                >
                  View PDF
                </button>
              </div>
            </div>
          );
        }
        setPrescList(prescriptions);
      });
  }, []);

  return (
    <div className="mt-5">
      <h3 style={{ color: "navy" }}>Current Prescriptions</h3>
      <hr />
      {prescList}
    </div>
  );
};

export default PatientPrescriptions;
