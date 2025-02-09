import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () =>
{

    return(
        <div className="loginsignup">
           <div className="loginsignuo-container">
            <h1>Sign Up</h1>
            <div className="loginsignuo-fields">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an acount?</p>
            <div className="loginsinup-agree">
                <input type="checkbox" name="" id="" />
                <p>By Continuing i agree to the therms of use & privacy policy.</p>
            </div>
            </div> 
        </div>
    )
    
}

export default LoginSignup