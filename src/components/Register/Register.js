import React from 'react';
import './Register.css';
import google from '../../images/logos/google.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='login'>
      <div className='login-form m-auto'>
        <div className='d-flex justify-content-center align-items-center flex-column h-100'>
          <h3 className='text-center fw-bold'>Login With</h3>
          <button className='rounded-pill border-1 login-btn mt-3'> <img src={google} className='google-logo' alt="" /> <span className='ms-4'>Continue with Google</span></button>
          <span className='mt-3'>Don't have an account? <Link to='/signin'>Create an account</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Register;