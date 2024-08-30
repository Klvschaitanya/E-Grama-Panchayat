import React from 'react'
import bootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { auth } from './firebase';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

export default function OfficerHome() {
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
    <div>
      <BrowserRouter>
      <Navbar /></BrowserRouter>

<button onClick={handleSignOut} style={{marginLeft:"1500px",color:'firebrick'}}>Signout</button>

     <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://onlineeducation360.wordpress.com/wp-content/uploads/2020/09/images-2020-09-13t132322.571.jpeg" class="d-block w-100" alt="..." height={550} />
    </div>
    <div class="carousel-item">
      <img src="https://inclusion-v2.s3.amazonaws.com/uploads/2022/04/Prmoting-Peoples-Movements-through-Jan-Bhagidai-SBM-Gramin-img.jpg" class="d-block w-100" alt="..." height={550} />
    </div>
    <div class="carousel-item">
      <img src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/278735407_295726882732952_3171954103405938519_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=crRIewdRmmMQ7kNvgELpwBB&_nc_ht=scontent.fhyd11-2.fna&oh=00_AYCENs_TxUxJER4JKTkxxHHRKIqnYbFeeOxlRY2IiuF97g&oe=66C7794A" class="d-block w-100" alt="..." height={550} />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<br/>

<div style={{display:'flex',justifyContent:'space-around'}}>

<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPsanvSxlkCxdR95EQBvQP9JJx7higlh_H4w&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Gram Panchayat Schemes</h5>
    <a href="#" class="btn btn-primary">schemes</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROVd-1K1jUzcnGbjqPVhZxxKKE_agErNB0g&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Gram Applications</h5>
    <a href="#" class="btn btn-primary">Check Applications</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYN9pYguHZLaLFqN4H9XJlShqVDDNTQhOGA&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Panchayat updates</h5>
    <a href="#" class="btn btn-primary">Updates</a>
  </div>
</div>


<div class="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgR5_0BvY4nmMOVmftQBhmTrSzkErcGNJOw&s" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Panchayat Complaints</h5>
    <a href="#" class="btn btn-primary">Complaints</a>
  </div>
</div>


</div>

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

    </div>
  )
}
