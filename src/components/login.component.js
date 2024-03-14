import React from 'react';
import axios from 'axios';
import { useState, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckIcon from '@mui/icons-material/Check';





const Login = () => {

  const navigate = useNavigate();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const msgref = useRef();
  const nullemail=useRef();
  const nullpsd=useRef();

  const handleSignupForm = async event => {
    event.preventDefault();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {

      email: Email,
      password: Password

    }


    let URL = "http://localhost:5173/api/Signup/api/Signin";
    await axios.post(URL, param, {
      headers: headers
    }).then((response) => {
      if (response.data === null || response.data === undefined) {
        console.log("success");
      } else {
        console.log(response.data);
        // JSON.parse(response); // should fail
        // JSON.parse(response["data"]); // should work
        var result = JSON.parse(response.data)
        console.log(result.emailstatus) // or if you prefer this notation
        if (result.emailstatus === true && result.passwordstatus === true) {
          msgref.current.style.display="block";

          setTimeout(() => {
            msgref.current.style.display="none";
            navigate('/Home')
          }, 2000);

        }
        else if (result.emailstatus === false && result.passwordstatus === false) {
          nullemail.current.style.display="block";
          nullpsd.current.style.display="none";
        }

        else if (result.emailstatus === true && result.passwordstatus === false) {
          nullpsd.current.style.display="block";
          nullemail.current.style.display="none";

        }
       
         

        

    };

    });


  }



  return (
    <form onSubmit={handleSignupForm}>
     
      <h3 className='lbl'><LockOutlinedIcon fontSize="large" id="icon" style={{color:"rgb(66, 66, 126)"}}/> SignIn</h3>
      {/* <div className="mb-3">
        <label className='lbl'>Email Id</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
          helperText="Please enter your name"
        />
      </div> */}
      <div><TextField id="outlined-basic"  label="Email" type="email" required variant="outlined"  onChange={(e) => setEmail(e.target.value)} data-testid="txtEmail"/></div>
      <br></br>
      {/* <div className="mb-3">
        <label className='lbl'>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required="Please enter "
          onChange={(e) => setPassword(e.target.value)}
        />
      </div> */}
       <div><TextField id="outlined-basic" type="password" label="Password" required variant="outlined"  onChange={(e) => setPassword(e.target.value)} data-testid="txtPassword"/></div>
      <br></br>
      <div className="d-grid">
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
       
        <Button type="submit" variant="contained" data-testid="btnSubmit" style={{backgroundColor:"rgb(66, 66, 126)"}}>Sign In</Button>
      
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#Home">password?</a>
      </p>
      <div class="alert alert-success msg" style={{padding:"15px"}} ref={msgref} role="alert" data-testid="success">
        <CheckIcon fontSize="medium"/>  Login Successful
      </div>
         
      {/* <Alert severity="success" class="msg" ref={msgref}>Login Successful</Alert> */}
   

      <div class="alert alert-danger msg" ref={nullemail} role="alert" data-testid="Failure">
       Invalid email!
      </div>

      <div class="alert alert-danger msg" ref={nullpsd} role="alert" data-testid="Message">
       Invalid password!
      </div>
    </form>
  )
}


export default Login;