import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Navbar = () => {
  const [status, setStatus] = useState();
  const [signup, setSignup] = useState();
  const [profile, setProfile] = useState();
  const [createDr, setCreateDr] = useState();
  const [lab, setLab] = useState();
  const [createPrescription, setCreatePrescription] = useState();
  const navigate = useNavigate();
  var session = Cookies.get("JSESSIONID");
  const logout = (e) => {
  
    
    fetch("http://localhost:8080/logout", {
            method: "POST",
            credentials: "include"

        }).then(()=> {
          navigate("/");
        })
    
    }
    useEffect(() => {
      if (session==null) {
        setStatus(<a href="/login"> <button className="item btn" type="submit" style={{color: "white"}}>Login</button></a>);
        setSignup(<a className="item nav-link active" href="/signup" style={{color: "white"}}>Sign up</a>);
        setProfile(null);
        setCreateDr(null);
        setLab(null);
        setCreatePrescription(null);
      }
      else {
        axios.get("http://localhost:8080/api/user/role", {
          withCredentials: true
        })
        .then((response) => {
          var role = response.data;
          if (role=="administrator") {
            setCreateDr(<a className="item nav-link" href="/admin/add" style={{color: "white"}}>Add Doctor</a>);
          }
          else if (role=="doctor") {
            setLab(<a className="item nav-link" href="/lab/create" style={{color: "white"}}>Schedule Lab</a>)
            setCreatePrescription(<a className="item nav-link" href="/prescription/create" style={{color: "white"}}>Create Prescription</a>);
          }
          setStatus(<button className="item btn" type="submit" onClick={logout} style={{color: "white"}}>Logout</button>);
          setProfile(<a className="item nav-link" href="/profile" style={{color: "white"}}>View Profile</a>);
          setSignup(null);
        })
        
      }
      
    }, [session])

    return (
        <header>
          <nav className="navbar fixed-top ">
            <div className="container-fluid">
              <div className="navbar-nav me-auto">
                <div className="nav-item" >
                  {profile}
                  <a className="item nav-link" href="/" style={{color: "white"}}>Home</a>
                  <a className="item nav-link" href="/" style={{color: "white"}}>Directory</a>
                  <div className="dropdown" style={{display: "inline-block"}}>
                    <a className="drop nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" style={{color: "white"}}>
                        Services
                    </a>
                    <ul className="dropdown-menu" style={{position: "absolute"}}>
                      <li><a className="dropdown-item" href="#cards">Appointments</a></li>
                      <li><a className="dropdown-item" href="/profile/prescriptions">Prescriptions</a></li>
                      <li><a className="dropdown-item" href="#cards">Lab Testing</a></li>
                    </ul>
                  </div>
                  
                  {createDr}
                  {lab}
                  {createPrescription}
                </div>
                
              </div>
              {status}
              {signup}
            </div>
          </nav>
          <br />
      </header>
      );
}
 
export default Navbar;