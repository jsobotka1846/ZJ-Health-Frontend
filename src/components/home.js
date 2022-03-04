import '../css/main.css';


const Home = () => {
    return ( 
        <div className="home">
            <div className="mt-5">
                <h1 className="text-center" style={{color: "navy"}}>Welcome to ZJ Health!</h1>
                <h2 className="text-center" style={{color: "navy"}}>Our talanted staff are here to ease the stress of healthcare</h2>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../pics/doctor.png')} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../pics/doc2.jpg')} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../pics/doc3.png')} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br /><br />
            <div className="container" id="cards">
                <div className="row my-3">
                    <div className="col-md-4">
                        <div className="card text-center h-100">
                            <div className="card-block bg-info">
                                <h2><i className="fa-solid fa-list-check"></i></h2>
                                <h4 className="card-title">Appointments</h4>
                        
                            </div>
                            <div className="row px-2 no-gutters">
                                <div className="col-12">
                                    <p>ZJ Health offers both in-person and telehealth appointments through our easy to use application.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center h-100">
                            <div className="card-block bg-info">
                                <h2><i className="fa-solid fa-vial"></i></h2>
                                <h4 className="card-title">Lab Testing</h4>
                                
                            </div>
                            <div className="row px-2 no-gutters">
                                <div className="col-12">
                                    <p>ZJ Health allows physicians to submit requests for lab testing through an easy to use online form.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center h-100">
                            <div className="card-block bg-info">
                                <h2><i className="fa-solid fa-pills"></i></h2>
                                <h4 className="card-title">Perscriptions</h4>
                                
                            </div>
                            <div className="row px-2 no-gutters">
                                <div className="col-12">
                                    <p>ZJ Health conveniently allows patients to recieve their perscription authorization securely through an emailed PDF document </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;