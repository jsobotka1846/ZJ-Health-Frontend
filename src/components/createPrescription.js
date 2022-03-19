import { useState } from "react";

const CreatePrescription = () => {
  const [message, setMessage] = useState();

  const submit = (e) => {

    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const pharmacy = e.target.pharmacy.value;
    const condition = e.target.condition.value;
    const patientEmail = e.target.patient.value;
    const req = {name, quantity, pharmacy, condition, patientEmail};
    fetch("http://localhost:8080/api/prescription/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
        credentials: "include",
        
    }).then(()=> {
      setMessage(<h1 className="bg-success" style={{fontSize: "16px"}}>Created Prescription for {patientEmail}</h1>);

    })
  }
  return (

    <form  onSubmit={submit}>
      <div className="form-group mt-5 row">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-primary text-white" style={{borderRadius: "1rem"}}>
                <div className="card-body p-5 text-center">
                  {message}
                  <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                    <h2 className="font-weight-bold text-uppercase">Prescription Form</h2>
                    <p className="text-white-50 mb-5">Please fill out the following fields</p>
      
                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="text" name="name" className="form-control" required/>
                      <label className="form-label">Medication Name</label>
                    </div>

                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="number" name="quantity" className="form-control" required/>
                      <label className="form-label">Quantity</label>
                    </div>
                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="text" name="pharmacy" className="form-control" required/>
                      <label className="form-label">Pharmacy</label>
                    </div>
                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="text" name="condition" className="form-control" required/>
                      <label className="form-label">Condition</label>
                    </div>
                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="text" name="patient" className="form-control" required/>
                      <label className="form-label">Patient Email</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg" type="submit">Create Prescription</button>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
      );
}
 
export default CreatePrescription;