const Profile = () => {
    return ( 
        <div className="profile">
            <div className="mt-5">
                <h1 className="text-center" style={{color: "navy"}}>Welcome</h1>
                <br />
                <h2 className="text-center" style={{color: "navy"}}>Current Appointments</h2>
                <p className="text-center"><a href="#" className="btn btn-outline-success">Create New Apppointment</a></p>
                <hr />
            </div>
        <div className="card text-center bg-primary border border-dark border-5">
            <div className="card-body">
                <h5 className="card-title text-light">Appointment</h5>
                <p className="card-text text-light">User</p>
                <p className="card-text text-light">Doctor</p>
                <p className="card-text text-light">Time/date</p>
                <a href="#" className="btn btn-primary border btn-outline-danger text-light">Cancel Appointment</a>
                <a href="#" className="btn btn-primary border btn-outline-success text-light">Review Appointment</a>
            </div>
        </div>
    </div>

     );
}
 
export default Profile;

