import React ,{useState}from 'react';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Officer_page from './Officer_page';
import Staff_page from './Staff_page';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import Mainpage from './Mainpage';

export default function Register() {

  // const nav = useNavigate();
  const [data,setData]=useState({
    email: "",
    password:""
  })
  const {email,password} = data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler =(e)=>{
    e.preventDefault();
 auth.createUserWithEmailAndPassword(email,password).then(user=>console.log(user)).catch(err=>console.log(err))
    if (email != '' && password !=""){
      alert("DATA SUBMITTED");
    }
    else(
      alert("PLEASE ENTER DETAILS")
    )
    setData(
      {
        email:"",
        password:""
      }
    )
  
  }
  return (
   
 <center>

    <form style={{padding:'10px', border:'300px solid lightblue',backgroundColor:"skyblue"}} onSubmit={submitHandler}>
    <div>
      <h1>REGISTER FORM</h1><br/>
      <label htmlFor='username' style={{fontSize:"x-large"}}>Username: </label>
      <input placeholder='Enter Email' type='email' name='email' value={email} onChange={changeHandler} id='username'/><br/><br/>
      <label htmlFor='password' style={{fontSize:"x-large"}}>Password:  </label>
      <input placeholder='Enter Password' type='password' name='password' value={password} onChange={changeHandler} id='password'/><br/><br/>
      <button style={{padding:"6px"}}>Register</button>

    </div>
    </form>
 </center>
  )
}