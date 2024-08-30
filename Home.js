import React from 'react'
import { auth } from './firebase'
import Navbar from './Navbar';
import { BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Home() {
    const handleSignOut = async () => {
        try {
          await auth.signOut();
          console.log('Signed out successfully');
          window.location.href = '/login'; 
        } catch (err) {
          console.error('Sign out error', err);
        }
      };
  return (
    <div style={{backgroundColor:'lavenderblush'}}>
   <center>
   <header style={{  fontSize:'60px',padding:'10px',
        textAlign:'center'}}> <span id="orange" style={{ color: 'orangered'}}>GRAMA </span><span id="white" style={{ color:'lightgray'}}>PAN</span><span id="green" style={{ color:'green'}}>CHAYAT</span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeKh-L1ILnuwFqCLhPTwnITMdMoonpbAObw&s" alt="" height="53px" width="70px" style={{border:' 0px solid',borderRadius:'50px'}} /></header> 
  
      <button onClick={handleSignOut} style={{marginLeft:"1500px",color:'firebrick'}}>Signout</button>
   


      <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tractorguru.in/blog/wp-content/uploads/2021/08/PM-Kisan-SCHEME.jpg" class="d-block w-100" alt="..." height={700}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>PM-Kisan Scheme</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://tractorguru.in/blog/wp-content/uploads/2021/08/pradhan-mantri-fasal-bima-yojana.jpg" class="d-block w-100" alt="..." height={700} />
      <div class="carousel-caption d-none d-md-block">
        <h5>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
        
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://tractorguru.in/blog/wp-content/uploads/2021/08/ENAM.jpg" class="d-block w-100" alt="..." height={700} />
      <div class="carousel-caption d-none d-md-block">
        <h5>E-NAM (National Agriculture Market)</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

<br/>



<div style={{display:'flex',justifyContent:'space-around'}}>

<div class="card" style={{width: "18rem"}}>
  <img src="https://static.mygov.in/static/s3fs-public/mygov_1472668125222745.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Pradhan Mantri Awas Yojana (PMAY)</h5>
    <a href="#" class="btn btn-primary">Apply</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROVd-1K1jUzcnGbjqPVhZxxKKE_agErNB0g&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Track Applications</h5>
    <a href="#" class="btn btn-primary">Check Applications</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiKbrmIoOsCwhvKA19DWsUfYLvRwZDqqF9g&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Birth Certificate </h5>
    <a href="#" class="btn btn-primary">Apply</a>
  </div>
</div>


<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgR5_0BvY4nmMOVmftQBhmTrSzkErcGNJOw&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Panchayat Complaints</h5>
    <a href="#" class="btn btn-primary">Register Complaint</a>
  </div>
</div>


</div>

<br/>
<br/>
<h2 style={{textDecoration:'underline'}}>Announcements :-</h2>
<br/>
<ul class="list-group list-group-flush">
  <li class="list-group-item"> <span style={{textDecoration:'underline',fontWeight:'bolder'}}>August 30, 2024</span> :    Water supply will be interrupted from 9 AM to 12 PM on for maintenance.</li>
  <li class="list-group-item"> <span style={{textDecoration:'underline',fontWeight:'bolder'}}> August 28 - September 15, 2024 </span> : Main Road, Village Entry Point .Repair work will be carried out, causing temporary disruptions. Please follow detour signs.  </li>
  <li class="list-group-item"> <span style={{textDecoration:'underline',fontWeight:'bolder'}}>August 30, 2024 </span> :  Applications for scholarships are open for deserving students. Forms can be collected from the school office. </li>
  <li class="list-group-item"> <span style={{textDecoration:'underline',fontWeight:'bolder'}}>August 25, 2024 </span> : Location: Village Community Hall, Free medical check-ups and consultations for all villagers. Specialists in general medicine, pediatrics, and gynecology will be available. </li>
  <li class="list-group-item"> <span style={{textDecoration:'underline',fontWeight:'bolder'}}>August 22 - September 30, 2024</span> :  Applications are open for affordable housing schemes. Eligibility criteria and forms are available at the office.  </li>
</ul>

<br/>
<div className="section" style={{textAlign:'center'}}>
            <h2>Contact Us</h2>
            <p><strong>Address:</strong> Gram Panchayat Office, Main Street, Village Name, District, State, PIN</p>
            <p><strong>Phone:</strong> +91-1234567890</p>
            <p><strong>Email:</strong> contact@gramapanchayat.in</p>
        </div>



   </center>
    </div>
  )
}
