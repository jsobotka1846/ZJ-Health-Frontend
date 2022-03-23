import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Directory from "./components/directory";
import Appointment from "./components/appointment";
import Createdoc from "./components/createdoc";
import ScheduleLab from "./components/scheduleLab";
import CreatePrescription from "./components/createPrescription";
import PatientPrescriptions from "./components/patientPrescriptions";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/admin/add" element={<Createdoc />} />
            <Route path="/lab/create" element={<ScheduleLab />} />
            <Route
              path="/prescription/create"
              element={<CreatePrescription />}
            />
            <Route
              path="/profile/prescriptions"
              element={<PatientPrescriptions />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
