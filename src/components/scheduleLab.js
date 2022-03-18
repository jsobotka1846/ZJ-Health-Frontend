const ScheduleLab = () => {
    const submit = (e) => {
        e.preventDefault();
        const testName = e.target.test.value;
        const date = e.target.date.value;
        const req = {testName, date};
        fetch("http://localhost:8080/api/lab/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req),
            credentials: "include",
            
        }).then(()=> {
            console.log("created");

        })
    }



    return (
        <form  onSubmit={submit}>
        <div className="form-group mt-5 row">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-primary text-white" style={{borderRadius: "1rem"}}>
                <div className="card-body p-5 text-center">
      
                    <div className="mb-md-5 mt-md-4 pb-5 row g-3">
      
                    <h2 className="font-weight-bold text-uppercase">Lab Form</h2>
                    <p className="text-white-50 mb-5">Please fill out the following fields</p>
      
                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="text" name="test" className="form-control" required/>
                      <label className="form-label">Test Performed</label>
                    </div>

                    <div className="col-md-6 form-outline form-white mb-4">
                      <input type="datetime-local" name="date" className="form-control" required/>
                      <label className="form-label">Date</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg" type="submit">Submit Lab</button>
      
                  </div>

      
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
      );
}
 
export default ScheduleLab;