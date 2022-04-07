import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
const MedicalRecord = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [finalLabs, setFInalLabs] = useState();
    const [finalDiagnoses, setFInalDiagnoses] = useState();
    const [finalTreatments, setFInalTreatments] = useState();
    const labs = [];
    const diagnoses = [];
    const treatments = [];

    const getData = (response) => {
        for (let diag of response.data.diagnosis) {
            diagnoses.push(
                <div className="container">
                    <h4>{diag.diagnosisName}</h4>
                    Date of Appointment: {diag.appointment.date}

                </div>
            );
        }
        for (let treatment of response.data.treatment) {
            treatments.push(
                <div className="container">
                    <h4>{treatment.treatmentName}</h4>
                    {treatment.treatmentReason}
                     <br />
                    Date of Appointment: {treatment.appointment.date}

                </div>
            );
        }
        for (let lab of response.data.labs) {
            labs.push(
                <div className="container">
                    <h4>{lab.testName}</h4>
                    Date Scheduled: {lab.date}

                </div>
            );
        }
        setFInalDiagnoses(diagnoses);
        setFInalLabs(labs);
        setFInalTreatments(treatments);
        
    }

    useEffect(() => {
        if (Cookies.get("JSESSIONID") == null) {
          navigate("/login");
        }
        if (params.patientId!=null) {
            axios.get("http://localhost:8080/api/record/view/"+params.patientId, {
            withCredentials: true,
            })
            .then((response) => {
                getData(response);
            });
        }
        else {
            axios.get("http://localhost:8080/api/record/view/current", {
            withCredentials: true,
            })
            .then((response) => {
                getData(response);
            });
        }
        
        
    }, []);


    return (

        <div className="mt-5">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#diagnoses">Diagnoses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#labs">Lab Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#treatments">Treatments</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="diagnoses">
                    {finalDiagnoses}
                </div>
                <div className="tab-pane" id="labs">
                    {finalLabs}
                </div>
                <div className="tab-pane" id="treatments">
                    {finalTreatments}
                </div>

            </div>
        </div>

      );
}
 
export default MedicalRecord;