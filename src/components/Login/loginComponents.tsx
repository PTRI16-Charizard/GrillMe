// import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router";
import { GoogleLogin } from "@react-oauth/google";
// interface LoginState {
//     isLoggedIn: boolean;
// }

interface CredentialResponse {
  credential: string;
}
 
const Login: React.FC = () => {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState<LoginState>(isLoggedIn:false);
  
  // oauth
  // on login, should redirect user using react router to /options
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const response = await fetch('http://localhost:3000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credential }),
      });
      // store user id in local storage
      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem('ID', data.user._id)
      navigate('/options');
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  return (
    <div>
      <h1>Hello!</h1>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>

  )
}

export default Login;