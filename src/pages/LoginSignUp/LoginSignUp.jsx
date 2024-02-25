import './LoginSignUp.css'
import { IoIosContact } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { useState } from 'react';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const LoginSignUp = () => {
    const [showpassword,setShowPassword] = useState(false);
    const togglePassword = () =>{
        setShowPassword(!showpassword)
    }
    return (
        <div className='loginSignup-container container'>
           <div className="loginSingup">
           <div className="heding">
                <h2>Sign Up</h2>
            </div>
            <label htmlFor="#">Name:</label>
            <div className="single-input">
                    <i><IoIosContact /></i>
                    <input type="text" placeholder='Your Name' />
            </div>
            <label htmlFor="#">Email:</label>
            <div className="single-input">
                    <i><MdOutlineEmail /></i>
                    <input type="email" placeholder='Your Email' />
            </div>
            <label htmlFor="#">Password:</label>
            <div className="single-input">
                    <i><GoLock /></i>
                    <input type={ showpassword ? 'text':'password'} placeholder='password' />
                    <i onClick={togglePassword}>{
                        showpassword ? <IoMdEye /> : <IoIosEyeOff />
                    }</i>
            </div>
            <label htmlFor="#">Confirm Password:</label>
            <div className="single-input">
            <i><GoLock /></i>
                    <input type={ showpassword ? 'text':'password'} placeholder='password' />
                    <i onClick={togglePassword}>{
                        showpassword ? <IoMdEye /> : <IoIosEyeOff />
                    }</i>
            </div>
          <div className="signUp">
          <input type="submit" value="Sign Up" />
          </div>
          <p>Alreay Have an Account ? <span>Login here</span></p>
          <div className="condition">
          <input type="checkbox" name="" id="" /> <p>By continuing I agree to the terms of use <br /> & privacy policy</p>
          </div>
           </div>
        </div>
    );
};

export default LoginSignUp;