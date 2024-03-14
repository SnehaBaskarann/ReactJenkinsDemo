// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './Home'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

//import  Dashboard  from './components/Dashboard'

function App() {
  return (
  
  
  
  
  <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" style={{color:"White"}}to={'/sign-in'}>
              Management System
            </Link>
            {/* <p className="navbar-brand" style={{color:"white"}}>Management System</p> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" >
                  <Link className="nav-link" style={{color:"White"}} to={'/sign-in'}>
                    <LoginIcon fontSize="large" style={{color:"White"}} /> Sign in
                    </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color:"White"}} to={'/sign-up'}>
                   <AppRegistrationIcon fontSize="large" style={{color:"White"}}/> Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div > */}
        <div className="auth-wrapper">
          {/* <div > */}
          <div className="auth-inner"> 
            <Routes>
              <Route path="/Home" element={<Home/>} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              {/* <Route path="/page" element={<Page/>}/> */}
              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;