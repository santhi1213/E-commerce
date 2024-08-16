import React from "react";
import './CSS/Loginsignup.css';

const LoginSignup = () =>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Enter your name"/>
                    <input type="email" placeholder="Enter your mail ID"/>
                    <input type="password" placeholder="Enter your password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to terms and use & privacy policy.</p>
                </div>
            </div>  
        </div>
    )
}

export default LoginSignup