import React, { useState } from 'react';
import { provinces, getCityMunByProvince } from '../constants';
import GoogleButton from 'react-google-button';

function Register(){
    const [isChecked, setChecked] = useState(false);

    const [province, setProvince] = useState("");
    const [provCode, setProvCode] = useState("");
    const [city, setCity] = useState("");
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [birthdate, setBirthdate] = useState(null);
    const [image, setImage] = useState(null);

    const selectProvince = (e) => {
        const selected = provinces.find((entry) => entry.name === e.target.value);
        setProvince(selected.name);
        setProvCode(selected.prov_code);
    }

    const selectCity = (e) => {
        setCity(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }

    const handleBirthdate = (e) => {
        setBirthdate(e.target.value);
    }

    const handleFreelance = (e) => {
        setChecked(!isChecked);
    }

    const handleSubmit = async (e) => {

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className='hero-content'>
                <div class="w-full max-w-xs">
                    {
                        (step === 1 && (
                            <div className="form-control">
                                <ul className="steps">
                                    <li className="step step-primary">
                                        Basic Info
                                    </li>
                                    <li className="step">
                                        Location
                                    </li>
                                    <li className="step">
                                        Personal Info
                                    </li>
                                    <li className="step">
                                        Finished
                                    </li>
                                </ul>
                                <Step1 handleEmail={handleEmail} handlePassword={handlePassword} handleFreelance={handleFreelance} isChecked={isChecked} />
                                <button onClick={() => setStep(step + 1)} className="btn btn-primary my-4">Next</button>
                            </div>
                        )) || 
                        (step === 2 && (
                            <>
                                <ul className="steps">
                                    <li className="step step-primary">
                                        Basic Info
                                    </li>
                                    <li className="step step-primary">
                                        Location
                                    </li>
                                    <li className="step">
                                        Personal Info
                                    </li>
                                    <li className="step">
                                        Finished
                                    </li>
                                </ul>
                                <Step2 province={province} provCode={provCode} city={city} isChecked={isChecked} selectProvince={selectProvince} selectCity={selectCity} />
                                <button onClick={() => setStep(step - 1)} className="btn btn-primary float-left my-4">Back</button>
                                <button onClick={() => setStep(step + 1)} className="btn btn-primary float-right my-4">Next</button>
                            </>
                        )) ||
                        (step === 3 && (
                            <>
                                <ul className="steps">
                                    <li className="step step-primary">
                                        Basic Info
                                    </li>
                                    <li className="step step-primary">
                                        Location
                                    </li>
                                    <li className="step step-primary">
                                        Personal Info
                                    </li>
                                    <li className="step">
                                        Finished
                                    </li>
                                </ul>
                                <Step3 handleUsername={handleUsername} handleBio={handleBio} handleBirthdate={handleBirthdate} handleImage={handleImage}/>
                                <button onClick={() => setStep(step - 1)} className="btn btn-primary float-left my-4">Back</button>
                                <button onClick={() => setStep(step + 1)} className="btn btn-primary float-right my-4">Next</button>
                            </>
                        )) ||
                        (step === 4 && (
                            <div className="form-control">
                                <button onClick={() => setStep(step - 1)} className="btn btn-primary float-left my-4">Back</button>
                                <button onClick={handleSubmit} className="btn btn-success my-4">Submit</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Step1 = ({handleEmail, handlePassword, handleFreelance, isChecked}) => {
    return (
        <div className="form-control content-center">
            <h1 className="text-5xl py-2 font-bold">Sign Up</h1>
            {/* Email */}
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input onChange={(e) => handleEmail(e)} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
            {/* Password */}
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input onChange={(e) => handlePassword(e)} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
            <div className="divider">OR</div>
            <GoogleButton style={{width: '100%'}} label="Sign Up with Google"/>
            <div className="divider"></div>
            <div className="input-group">
                <span className="font-bold text-white input-bordered py-1">Do you want to be a Freelancer?</span>
                <input
                    type="checkbox"
                    className="checkbox checkbox-primary py-4 px-4"
                    checked={isChecked}
                    onChange={handleFreelance}
                />
            </div>
        </div>
    );
}

const Step2 = ({province, provCode, city, isChecked, selectProvince, selectCity}) => {
    return (
        <div className="form-control">
            <h1 className="text-5xl py-2 font-bold">Sign Up</h1>
            {/* Location */}
            <label class="label">
                <span class="label-text">Province</span>
            </label>
            <select onChange={(e) => selectProvince(e)} className="select select-bordered w-full max-w-xs">
                <option value={null} disabled selected>Select</option>
                {provinces.map(({prov_code, name}) => {
                    return (
                        <option key={prov_code} value={name}>
                            {name}
                        </option>
                    );
                })}
            </select>
            {!!province && (
                    <>
                        <label class="label">
                            <span class="label-text">City</span>
                        </label>
                        <select onChange={(e) => selectCity(e)} className="select select-bordered w-full max-w-xs">
                            <option value={null} disabled selected>Select</option>
                            {getCityMunByProvince(provCode).map(({name, prov_code, mun_code}) => {
                                return (
                                    <option value={city} key={name}>
                                        {name}
                                    </option>
                                );
                            })}
                        </select>
                    </>
            )}
            <label class="label">
                <span class="label-text">Address</span>
            </label>
            <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
            {isChecked && (
                <>
                    <label class="label">
                        <span class="label-text">Work Address</span>
                    </label>
                    <input type="text" placeholder="Work Address" class="input input-bordered w-full max-w-xs" />
                </>
            )}
            <label class="label">
                <span class="label-text">ZIP Code</span>
            </label>
            <input type="number" placeholder="Zip Code" class="input input-bordered w-full max-w-xs" />
        </div>
    );
}

const Step3 = ({handleUsername, handleBio, handleBirthdate, handleImage}) =>{
    return (
        <div className="form-control">
            <h1 className="text-5xl py-2 font-bold">Sign Up</h1>
            <label class="label">
                <span class="label-text">Username</span>
            </label>
            <input onChange={(e) => handleUsername(e)} type="text" placeholder="Username" class="input input-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text">Birthdate</span>
            </label>
            <input onChange={(e) => handleBirthdate(e)} type="date" placeholder="Birthday" class="input input-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text">Profile Picture</span>
            </label>
            <input type="file" onChange={(e) => handleImage(e)} className="file-input file-input-bordered w-full max-w-xs" />
            <label class="label">
                <span class="label-text">Biography</span>
            </label>
            <textarea onChange={(e) => handleBio(e)} placeholder='Tell us about yourself!' className="textarea textarea-bordered w-full max-w-xs" />
        </div>
    );
}

export default Register;