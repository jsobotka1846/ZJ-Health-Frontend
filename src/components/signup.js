import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [message, setMessage] = useState();
  let navigate = useNavigate();
  const submit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const firstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;
      const age = e.target.age.value
      const street = e.target.street.value;
      const city = e.target.city.value;
      const state = e.target.state.value;
      const zip = e.target.zip.value;
      const phoneNum = e.target.phoneNum.value;
      const insuranceName = e.target.insuranceName.value;
      const type = e.target.type.value;
      const policyNum = e.target.policyNum.value;
      const user = {email, password, firstName, lastName, age, street, city, state, zip, phoneNum};
      const insurance = {insuranceName, type, policyNum};
      const req = {user, insurance};
      fetch("https://zjhealth.herokuapp.com/api/user/register", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(req)
          
      }).then((response)=> {
          if (response.status==200) {
            navigate("/login");
          }
          else {
            setMessage(
              <h1
                className="bg-danger"
                style={{ fontSize: "16px", color: "white" }}
              >
                Invalid request, email may already be in use.
              </h1>
            );
            window.scrollTo(0, 0);
          }
      
    });
  };

  return (
    <form onSubmit={submit}>
      <div className="form-group mt-5 row">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            {message}
            <div
              className="card bg-primary text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5 row g-3">
                  <h2 className="font-weight-bold text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-5">
                    Please fill out the following fields
                  </p>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">First Name</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Last Name</label>
                  </div>

                  <div className="col-md-6 form-outline form-white mb-4">
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Age</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="street"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Street</label>
                  </div>

                  <div className="col-md-7 form-outline form-white mb-4">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      required
                    />
                    <label className="form-label">City</label>
                  </div>

                  <div className="col-md-2 form-outline form-white mb-4">
                    <select name="state" className="form-select">
                      <option value="AL">AL</option>
                      <option value="AK">AK</option>
                      <option value="AR">AR</option>
                      <option value="AZ">AZ</option>
                      <option value="CA">CA</option>
                      <option value="CO">CO</option>
                      <option value="CT">CT</option>
                      <option value="DC">DC</option>
                      <option value="DE">DE</option>
                      <option value="FL">FL</option>
                      <option value="GA">GA</option>
                      <option value="HI">HI</option>
                      <option value="IA">IA</option>
                      <option value="ID">ID</option>
                      <option value="IL">IL</option>
                      <option value="IN">IN</option>
                      <option value="KS">KS</option>
                      <option value="KY">KY</option>
                      <option value="LA">LA</option>
                      <option value="MA">MA</option>
                      <option value="MD">MD</option>
                      <option value="ME">ME</option>
                      <option value="MI">MI</option>
                      <option value="MN">MN</option>
                      <option value="MO">MO</option>
                      <option value="MS">MS</option>
                      <option value="MT">MT</option>
                      <option value="NC">NC</option>
                      <option value="NE">NE</option>
                      <option value="NH">NH</option>
                      <option value="NJ">NJ</option>
                      <option value="NM">NM</option>
                      <option value="NV">NV</option>
                      <option value="NY">NY</option>
                      <option value="ND">ND</option>
                      <option value="OH">OH</option>
                      <option value="OK">OK</option>
                      <option value="OR">OR</option>
                      <option value="PA">PA</option>
                      <option value="RI">RI</option>
                      <option value="SC">SC</option>
                      <option value="SD">SD</option>
                      <option value="TN">TN</option>
                      <option value="TX">TX</option>
                      <option value="UT">UT</option>
                      <option value="VT">VT</option>
                      <option value="VA">VA</option>
                      <option value="WA">WA</option>
                      <option value="WI">WI</option>
                      <option value="WV">WV</option>
                      <option value="WY">WY</option>
                    </select>
                    <label className="form-label">State</label>
                  </div>

                  <div className="col-md-3 form-outline form-white mb-4">
                    <input
                      type="number"
                      name="zip"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Zip Code</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="phoneNum"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Phone Number</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="insuranceName"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Insurance Name</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="type"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Insurance Type</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="policyNum"
                      className="form-control"
                      required
                    />
                    <label className="form-label">
                      Insurance Policy Number
                    </label>
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg"
                    type="submit"
                  >
                    Create account
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a href="login.html" className="text-white-50 fw-bold">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
