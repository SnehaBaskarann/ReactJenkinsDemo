import React from 'react'
import axios from 'axios'
import { useState, useRef } from 'react';
// import { Message } from 'rsuite';
import {useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const Register = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState([""]);
  const [LastName, setLastName] = useState([""]);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const msgref = useRef();
  const nullref=useRef();
  //password useref
  const lenref=useRef();
  const maxlen=useRef();
  const [clrpswd,setClrpswd]=useState();
  const[focpswd,setFocpswd]=useState();


  const handleSignupForm = async event => {
    event.preventDefault();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {
      firstname: FirstName,
      lastname: LastName,
      email: Email,
      password: Password

    }

    if(Password.length <8 )
    {
      lenref.current.style.display="block";
      maxlen.current.style.display="none";
      setClrpswd("error")
      setFocpswd("true")
    }

    else if(Password.length >=14)
    {
      lenref.current.style.display="none";
      maxlen.current.style.display="block";
      setClrpswd("error")
      setFocpswd("true")
    }
    else
    {
      lenref.current.style.display="none";
      maxlen.current.style.display="none";
      setFocpswd("")

    let URL = "http://localhost:5173/api/Signup";
    await axios.post(URL, param, {
      headers: headers
    }).then((response) => {
      var result =JSON.parse(response.data)
      if (response.data === null || response.data === undefined) {
        console.log(response.data);
      } 
      

      else if(result.accountexist===true)
      {
        console.log(result)
        nullref.current.style.display="block";
        
        setTimeout(()=> {
          nullref.current.style.display="none";
        },3000);
      }
      
      
      
      else {
         msgref.current.style.display = "block";
        console.log(response);

         setTimeout(() => {
           msgref.current.style.display = "none";
           navigate('/sign-in')
         }, 5000);



      };

    });

  }
  }

  return (
    <>
      <form onSubmit={handleSignupForm}>

        <h3 className='lbl'><PersonAddAltOutlinedIcon fontSize="large" id="icon" style={{color:"rgb(66, 66, 126)"}}/> Sign Up</h3>
        <div><TextField id="outlined-basic"  label="FirstName" type="text" required variant="outlined"  onChange={(e) => setFirstName(e.target.value)}/></div><br></br>
        {/* <div className="mb-3">
          <label className='lbl'>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div> */}
         <div><TextField id="outlined-basic"  label="LastName" type="text" required variant="outlined"  onChange={(e) => setLastName(e.target.value)}/></div><br></br>
        {/* <div className="mb-3">
          <label className='lbl'>Last Name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className='lbl'>Email Id</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div> */}
         <div><TextField id="outlined-basic"  label="Email Id" type="email" required variant="outlined"  onChange={(e) => setEmail(e.target.value)}/></div><br></br>
         <div><TextField id="outlined-basic"  label="Password" type="password" required variant="outlined" color={clrpswd} focused={focpswd} onChange={(e) => setPassword(e.target.value)}/></div><br></br>
        {/* <div className="mb-3">
          <label className='lbl'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          /> */}
          <p ref={lenref} className="Password">*Password length should be above 8 character</p>
          <p ref={maxlen} className="Password">*Password Should not exceeds 14 characters</p>

        
        {/* <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div> */}
         <div className="d-grid">
         <Button type="submit" variant="contained" style={{backgroundColor:"rgb(66, 66, 126)"}}>Sign Up</Button></div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        <div class="alert alert-success msg" ref={msgref} role="alert">
          Registeration Successful!
        </div>

        <div class="alert alert-danger msg" ref={nullref} role="alert">
         This Email Id is already exists !
        </div>


      </form>
    </>
  )
}

export default Register;

