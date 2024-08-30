import React ,{useState,useEffect} from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Officer_page from './Officer_page'
import { auth } from './firebase';
import Home from './Home'




export default function StaffLogin() {
  const [presentUser,setpresentUser]=useState(null);

  useEffect(()=>{auth.onAuthStateChanged(
    user=>{if(user){
      setpresentUser({
        uid:user.uid,
        email:user.email
      });
    }
    else{
       setpresentUser(null);
    }
  }
  )},[])

const [data,setData]=useState({
  email: '',
  password:''
});
const {email,password}= data;

  const handleChange = e =>{
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(user=>console.log(user)).catch(err=>console.log(err))
    console.log(data);
  }
  return (
 <div>
  {presentUser?<Home />:(
<div className="container">
           
        

          <header style={{  fontSize:'60px',padding:'10px',
        textAlign:'center'}}> <span id="orange" style={{ color: 'orangered'}}>GRAMA </span><span id="white" style={{ color:'lightgray'}}>PAN</span><span id="green" style={{ color:'green'}}>CHAYAT</span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeKh-L1ILnuwFqCLhPTwnITMdMoonpbAObw&s" alt="" height="53px" width="70px" style={{border:' 0px solid',borderRadius:'50px'}} /></header> 
           
      <br/>
        <form action="" style={{  textAlign:'center',
        margin: '100px 0px 0px 0px',
        backgroundColor:'antiquewhite', padding:' 110px' ,}}>
            
            <h2 style={{textDecoration:"underline"}}>STAFF LOGIN</h2>
            <br/>  <br/>
            <label htmlFor="username">Username :</label>
            <input type="email" id="email" placeholder="Enter Username" name='email' value={email} onChange={handleChange}/><br/><br/>
            <label htmlFor='password' >Password :</label>
            <input type="password" name="password" value={password} id="password" placeholder="Enter Password" onChange={handleChange}/>
            <br/>  <br/>
          <button onClick={handleSubmit} >Login</button>
        </form>
     
        <div className="section" style={{textAlign:'center'}}>
            <h2>Contact Us</h2>
            <p><strong>Address:</strong> Gram Panchayat Office, Main Street, Village Name, District, State, PIN</p>
            <p><strong>Phone:</strong> +91-1234567890</p>
            <p><strong>Email:</strong> contact@gramapanchayat.in</p>
        </div>

      
    </div>
)}
 </div>
  







)
}

