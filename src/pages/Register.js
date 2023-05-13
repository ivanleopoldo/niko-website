import React, { useState } from 'react'

function Register(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const handleSubmit = async (e) => {

    }

    return (
        
        <div className="hero min-h-screen bg-base-200">
            <div className='hero-content text-center'>

                <form onSubmit={handleSubmit}>
                    <div class="form-control w-full max-w-xs">
                        {/* Name */}
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        {/* Email */}
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        {/* Password */}
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type={isPasswordVisible ? "text": "password" } placeholder="Password" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text">Show password</span>
                            <input type='checkbox' className='checkbox' checked={isPasswordVisible} onChange={togglePasswordVisibility}></input>
                        </label>
                        {/* Location */}
                        <label class="label">
                            <span class="label-text">Location</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Where are you from?</option>
                            <option>Cebu City</option>
                            <option>Mandaue City</option>
                            <option>Talisay City</option>
                            <option>Consolacion</option>
                        </select>
                        {/* Profile Picture */}
                        <label class="label">
                            <span class="label-text">Profile Picture</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register;