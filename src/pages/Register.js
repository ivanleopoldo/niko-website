import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Range} from '../components';

function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Passwords do not match, show an error message or handle the validation as desired
      console.log('Passwords do not match');
      return;
    }

    // Passwords match, continue with form submission or other actions
    console.log('Passwords match');
    // Add your desired logic here

    navigate('/home');
  };

  const handleFreelance = (e) => {
    setIsChecked(e.target.checked);
  };

  const [basePrice, setBasePrice] = useState(25);

  const handleBasePriceChange = (e) => {
    setBasePrice(parseInt(e.target.value));
  };
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <form onSubmit={handleSubmit}>
          <h1 className="mb-2.5 text-3xl">Tekniko Registration</h1>
          <hr />
          <div className="form-control w-full max-w-xs">
            {/* Name */}
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" required />
            {/* Email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required />
            {/* Password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* confirm Password */}
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label">
              <span className="label-text">Show password</span>
              <input type="checkbox" className="checkbox" checked={isPasswordVisible} onChange={togglePasswordVisibility} />
            </label>
            {/* Location */}
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select className="select select-bordered w-full max-w-xs" required>
              <option disabled selected>
                Where are you from?
              </option>
              <option>Cebu City</option>
              <option>Mandaue City</option>
              <option>Talisay City</option>
              <option>Consolacion</option>
              <option>Lapu-lapu</option>
              </select>
                   {/* Freelancer */}
                   <div className="form-control mt-2.5">
                <div>
                  <label className="cursor-pointer label">
                    <span className="label-text">Do you want to be a Freelancer?</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-success"
                      checked={isChecked}
                      onChange={handleFreelance}
                    />
                  </label>
                </div>
                {isChecked && (
                  <div>
                    <label className="label">
                      <span className="label-text">Certificate</span>
                      <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                    <label className="label">
                      <span className="label-text">Job Specialization</span>
                      <select>
                        <option disabled selected>
                          Your job Specialization
                        </option>
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Construction worker</option>
                        <option>Driver</option>
                      </select>
                    </label>
                    <label className="label">
                    <span className="label-text">Base price for service</span>
                        </label>
                        <Range value={basePrice} onChange={handleBasePriceChange} />
                    </div>
                  
                )}
              </div>
              {/* Profile Picture */}
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
              <hr className="mt-2.5" />
            </div>
            <button className="btn btn-success mt-2.5" onClick={handleSubmit}>
              Create account
            </button>
          </form>
        </div>
      </div>
    );
}

export default Register;