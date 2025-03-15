// import React from "react"
// import { useState } from "react";
// import { useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
 
// interface LoginState {
//     isLoggedIn: boolean;
// }
 
function Login (){
    // const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState<LoginState>(isLoggedIn:false);
    return (
        <div>
            <h1>Hello!</h1>
            <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>

    )
    // oauth
    // on login, should redirect user using react router to /options

}

export default Login;