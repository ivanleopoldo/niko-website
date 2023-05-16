import React, { useState } from 'react';
import { provinces, getCityMunByProvince } from '../constants';
import GoogleButton from 'react-google-button';
import { Range } from '../components';

function Register(){
    const [isChecked, setChecked] = useState(false);

    const [province, setProvince] = useState("");
    const [provCode, setProvCode] = useState("");
    const [city, setCity] = useState("");
    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [birthdate, setBirthdate] = useState(null);
    const [image, setImage] = useState(null);
    const [resume, setResume] = useState(null);
    const [address, setAddress] = useState("");
    const [workAddress, setWorkAddress] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [basePrice, setBasePrice] = useState(0);

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

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
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

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleWorkAddress = (e) => {
        setWorkAddress(e.target.value);
    }

    const handleZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const handleFreelance = (e) => {
        setChecked(!isChecked);
    }

    const handleBasePrice = (e) => {
        setBasePrice(parseInt(e.target.value));
    }

    const handleResume = (e) => {
        setResume(e.target.value);
    }

    const handleSubmit = async (e) => {

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className='hero-content'>
                <div className="w-full max-w-xs">
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
                                <Step1 
                                    handleEmail={handleEmail} 
                                    handlePassword={handlePassword} 
                                    handleFreelance={handleFreelance} 
                                    isChecked={isChecked} 
                                />
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
                                <Step2 
                                    province={province} 
                                    provCode={provCode} 
                                    city={city} 
                                    isChecked={isChecked} 
                                    selectProvince={selectProvince} 
                                    selectCity={selectCity} 
                                    handleAddress={handleAddress}
                                    handleWorkAddress={handleWorkAddress}
                                    handleZipCode={handleZipCode}
                                />
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
                                <Step3 
                                    handleFirstName={handleFirstName}
                                    handleLastName={handleLastName}
                                    handleBio={handleBio} 
                                    handleBirthdate={handleBirthdate} 
                                    handleImage={handleImage} 
                                    handleResume={handleResume}
                                    handleBasePrice={handleBasePrice}
                                    isChecked={isChecked}
                                />
                                <button onClick={() => setStep(step - 1)} className="btn btn-primary float-left my-4">Back</button>
                                <button onClick={() => setStep(step + 1)} className="btn btn-primary float-right my-4">Next</button>
                            </>
                        )) ||
                        (step === 4 && (
                            <div className="form-control">
                                <Step4 
                                    email={email}
                                    password={password}
                                    isChecked={isChecked}
                                    bio={bio}
                                    birthdate={birthdate}
                                    image={image}
                                    resume={resume}
                                    basePrice={basePrice}
                                    firstName={firstName}
                                    lastName={lastName}
                                    address={address}
                                    workAddress={workAddress}
                                    zipCode={zipCode}
                                />
                                <button onClick={() => setStep(step - 1)} className="btn btn-primary float-left my-4">Back</button>
                                <button onClick={handleSubmit} className="btn btn-success float-right my-4">Submit</button>
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
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input onChange={(e) => handleEmail(e)} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            {/* Password */}
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input onChange={(e) => handlePassword(e)} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
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

const Step2 = ({province, provCode, city, isChecked, selectProvince, selectCity, handleAddress, handleWorkAddress, handleZipCode}) => {
    return (
        <div className="form-control">
            <h1 className="text-5xl py-2 font-bold">Sign Up</h1>
            {/* Location */}
            <label className="label">
                <span className="label-text">Province</span>
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
                        <label className="label">
                            <span className="label-text">City</span>
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
            <label className="label">
                <span className="label-text">Address</span>
            </label>
            <input onChange={(e) => handleAddress(e)} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
            {isChecked && (
                <>
                    <label className="label">
                        <span className="label-text">Work Address</span>
                    </label>
                    <input onChange={(e) => handleWorkAddress(e)} type="text" placeholder="Work Address" className="input input-bordered w-full max-w-xs" />
                </>
            )}
            <label className="label">
                <span className="label-text">ZIP Code</span>
            </label>
            <input onChange={(e) => handleZipCode(e)} type="number" placeholder="Zip Code" className="input input-bordered w-full max-w-xs" />
        </div>
    );
}

const Step3 = ({handleFirstName, handleLastName, handleBasePrice, handleResume, handleBio, handleBirthdate, handleImage, isChecked, basePrice}) =>{
    return (
        <div className="form-control">
            <h1 className="text-5xl py-2 font-bold">Sign Up</h1>
            <label className="label">
                <span className="label-text">First Name</span>
            </label>
            <input onChange={(e) => handleFirstName(e)} type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Last Name</span>
            </label>
            <input onChange={(e) => handleLastName(e)} type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Birthdate</span>
            </label>
            <input onChange={(e) => handleBirthdate(e)} type="date" placeholder="Birthday" className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Profile Picture</span>
            </label>
            <input type="file" onChange={(e) => handleImage(e)} className="file-input file-input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Biography</span>
            </label>
            <textarea onChange={(e) => handleBio(e)} placeholder='Tell us about yourself!' className="textarea textarea-bordered w-full max-w-xs" />
            {isChecked && (
                <>
                    <label className="label">
                        <span className="label-text">Base Price in (₱)</span>
                    </label>
                    <Range value={basePrice} onChange={handleBasePrice} />
                    <label className="label">
                        <span className="label-text">Resume</span>
                    </label>
                    <input type="file" onChange={(e) => handleResume(e)} className="file-input file-input-bordered w-full max-w-xs" />
                </>
            )}
        </div>
    );
}

const Step4 = ({email, password, isChecked, resume, image, firstName, lastName, birthdate, address, workAddress, basePrice, zipCode, bio}) => {
    return (
        <div>
            <label className="label">
                <span className="label-text">{email}</span>
            </label>
            <label className="label">
                <span className="label-text">{password}</span>
            </label>
            <label className="label">
                <span className="label-text">{image}</span>
            </label>
            <label className="label">
                <span className="label-text">{firstName}</span>
            </label>
            <label className="label">
                <span className="label-text">{lastName}</span>
            </label>
            <label className="label">
                <span className="label-text">{birthdate}</span>
            </label>
            <label className="label">
                <span className="label-text">{address}</span>
            </label>
            <label className="label">
                <span className="label-text">{bio}</span>
            </label>
            <label className="label">
                <span className="label-text">{resume}</span>
            </label>
            <label className="label">
                <span className="label-text">{zipCode}</span>
            </label>
            <label className="label">
                <span className="label-text">{workAddress}</span>
            </label>
            <label className="label">
                <span className="label-text">{basePrice}</span>
            </label>
        </div>
    );
}

export default Register;