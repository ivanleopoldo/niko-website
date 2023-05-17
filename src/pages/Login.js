import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, signinWithGoogle, signIn } = UserAuth();
  const navigate = useNavigate();
  
  const handleGoogleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(e){
      console.log(e);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  }

  useEffect(() => {
    if (currentUser){
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Tekniko</h1>
          <form onSubmit={handleLogin} className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input input-bordered" required/>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input input-bordered" required/>
            <label className="label">
              <span className="label-text-alt"></span>
              <span className="label-text-alt hover:text-blue-300" onClick={()=>alert('hello')}>Forgot Password?</span>
            </label>
            <br></br>
            <button className="btn btn-success">Login</button>
          </form>
          <div className="divider"> OR </div>
          <GoogleButton type="dark" onClick={handleGoogleLogin} label="Sign in with Google"/>
          <div>
            <p className="text-xs py-2.5 opacity-50">Don't have an Account? <Link to={"/register"}><span className="text-blue-400 hover:text-blue-300">Register Now!</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;