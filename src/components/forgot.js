import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Forgot = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState();
  const submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const req = { email };
    fetch("https://zjhealth.herokuapp.com/api/user/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    }).then(() => {
      setMessage(
        <h1 className="bg-success" style={{ fontSize: "16px" }}>
          If email exists, reset password link sent.
        </h1>
      );
    });
  };

  return (
    <form onSubmit={submit}>
      <div className="form-group mt-5 row">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-primary text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                {message}
                <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                  <h2 className="font-weight-bold text-uppercase">
                    Forgot Password
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following field
                  </p>

                  <div className="col-md-12 form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <button
                    className="col-md-12 btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Forgot;
