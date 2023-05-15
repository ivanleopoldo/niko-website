import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
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
      navigate("/Home");
    }
  }, [currentUser]);


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md ">
          <div>
              <button className="btn btn-success no-animation">TEKNIKO</button>
            </div>
          <input type="text" placeholder="Username" className="input w-full max-w-xs" required />
          <input type="password" placeholder="Password" className="input w-full max-w-xs mt-2.5" required />
          <div>
              <button className='btn no-animation mt-3.5 mb-2.5 '>Login</button>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"></div>
          <hr></hr>
          <div className='mt-2.5'>
          <button onClick={handleGoogleLogin} className="btn btn-success">Login with Google</button>
          <button className="btn btn-info ml-2.5">register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;