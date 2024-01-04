import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../Services/UserService';

function Login() {

const [email,setEmail]=useState("");
const [password,setPassword]= useState("");
const [login,setLogin]= useState("Login");
const navigate = useNavigate();


const submtHandler = async (e)=>{
  e.preventDefault()
;   if (login==="Login")
   {  
    try{
      await UserService.insertProduct({email,password});
      navigate("/Details");
    }
    catch(error){
      console.log(error);
    }
    
   }

   

}

const toggleLogin=()=>{
setLogin( (login==="Login")?"Sign In ":"Login");

}

  return (
    <div className='d-flex flex-row justify-content-center pt-3 '>


    <div className='w-25  justify-content-center   h-auto '>
  <form className='border  border-primary p-4 '>
    <h3>{login}</h3>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        id="email"
        name='email'
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        id='password'
        name='password'
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>

    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={submtHandler}>
        Submit
      </button>
    </div>
  
  </form>

  <Link onClick={toggleLogin}><p>{login!=="Login"?"Already Resgistered click here to Login":"New user Click Here to sign in"} </p></Link>
    </div>

    </div>
  
  )
}

export default Login