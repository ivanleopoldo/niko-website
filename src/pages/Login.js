import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { currentUser, signinWithGoogle } = UserAuth();
  const navigate = useNavigate();
  
  const handleGoogleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    if (currentUser){
      navigate("/home");
    }
  }, [currentUser]);


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Tekniko</h1>
          <p className="py-6">Login</p>
          <button onClick={handleGoogleLogin} className="btn">Login with Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login