import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  specialization,
  provinces,
  getCityMunByProvince,
} from "../config/constants";
import { Range } from "../components";

import { RegisterHandler, ValidationHandler } from "../utils/handlers";
import { RegisterController } from "../utils/controllers";
import { Firebase, auth } from "../config";

function Register() {
  const [info, setInfo] = useState({
    basicInfo: {
      displayName: null,
      email: null,
      uid: null,
      phoneNumber: null,
      bio: null,
      isFreelancer: false,
    },
    locationInfo: {
      provName: null,
      provCode: null,
      address: null,
      city: null,
      workAddress: null,
      zipCode: null,
    },
    freelanceInfo: {
      specialization: null,
      basePrice: 1500,
    },
  });

  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const callback = (data) => {
    setInfo({
      ...info,
      ...data,
    });
  };

  const setErrorState = (name, err_msg = "") => {
    setErrors({
      ...errors,
      [name]: err_msg,
    });
  };

  const handler = new RegisterHandler(callback, info);
  const validation = new ValidationHandler(handler, setErrorState, provinces);
  const controller = new RegisterController(auth, Firebase);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isAnError = (key) => {
    const bool = errors[key] === "";
    return bool;
  };

  const handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let val = event.target.value;
    validation.validateSignUp(event, name, val);
  };

  const handleSubmit = (e) => {
    controller.signUp(info);
    navigate("/home");
  };

  const formSteps = () => {
    switch (step) {
      case 1: {
        return (
          <div className="form-control content-center">
            <h1 className="text-4xl py-2 font-bold">Additional Info</h1>
            <div className="input-group mt-3">
              <span className="font-bold input-bordered py-1">
                Do you want to be a Freelancer?
              </span>
              <input
                name="isFreelancer"
                type="checkbox"
                onChange={(e) =>
                  setInfo({
                    ...info,
                    basicInfo: { isFreelancer: e.target.checked },
                  })
                }
                className="checkbox checkbox-primary py-4 px-4 focus:border-transparent focus:ring-0"
                checked={info.basicInfo.isFreelancer}
              />
            </div>
            <button onClick={nextStep} className="btn btn-primary my-4">
              Next
            </button>
          </div>
        );
      }
      case 2: {
        return (
          <div>
            <h1 className="text-4xl py-2 font-bold">Additional Info</h1>
            {/* Location */}
            <label className="label">
              <span className="label-text">Province</span>
            </label>
            <select
              name="province"
              onChange={(e) => {
                const selected = provinces.find(
                  (item) => item.name === e.target.value
                );
                setInfo({
                  ...info,
                  locationInfo: {
                    ...info.locationInfo,
                    provName: selected.name,
                    provCode: selected.prov_code,
                  },
                });
              }}
              selected={
                info.locationInfo.provName === null
                  ? ""
                  : info.locationInfo.provName
              }
              className="select select-bordered w-full max-w-xs"
              required
            >
              <option value={null} disabled selected>
                Select
              </option>
              {provinces.map(({ prov_code, name }) => {
                return (
                  <option
                    key={prov_code}
                    value={name}
                    selected={
                      info.locationInfo.provName === name ? true : false
                    }
                  >
                    {name}
                  </option>
                );
              })}
            </select>
            {errors.province && (
              <span className="label-text text-rose-500">
                {errors.province}
              </span>
            )}
            {!!info.locationInfo.provName && (
              <>
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <select
                  name="city"
                  onChange={handleChange}
                  value={info.locationInfo.city}
                  className="select select-bordered w-full max-w-xs"
                  required
                >
                  <option value={null} disabled selected>
                    Select
                  </option>
                  {getCityMunByProvince(info.locationInfo.provCode).map(
                    ({ name, prov_code, mun_code }) => {
                      return (
                        <option
                          key={name}
                          selected={
                            info.locationInfo.city === name ? true : false
                          }
                        >
                          {name}
                        </option>
                      );
                    }
                  )}
                </select>
                {errors.city && (
                  <span className="label-text text-rose-500">
                    {errors.city}
                  </span>
                )}
              </>
            )}
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              name="address"
              onChange={handleChange}
              value={
                info.locationInfo.address === null
                  ? ""
                  : info.locationInfo.address
              }
              type="text"
              placeholder="Address"
              className={
                "input input-bordered w-full max-w-xs " +
                (errors.address && "border-rose-500")
              }
              required
            />
            {errors.address && (
              <span className="label-text text-rose-500">{errors.address}</span>
            )}
            {info.basicInfo.isFreelancer && (
              <>
                <label className="label">
                  <span className="label-text">Work Address</span>
                  <span className="label-text-alt">Optional</span>
                </label>
                <input
                  onChange={(e) => handler.LocationInfoHandler(e)}
                  name="workAddress"
                  type="text"
                  placeholder="Work Address"
                  className="input input-bordered w-full max-w-xs "
                />
              </>
            )}
            <label className="label">
              <span className="label-text">ZIP Code</span>
            </label>
            <input
              name="zipCode"
              onChange={handleChange}
              value={
                info.locationInfo.zipCode === null
                  ? ""
                  : info.locationInfo.zipCode
              }
              maxLength={4}
              type="number"
              placeholder="Zip Code"
              className={
                "input input-bordered w-full max-w-xs " +
                (errors.zipCode && "border-rose-500")
              }
              required
            />
            {errors.zipCode && (
              <span className="label-text text-rose-500">{errors.zipCode}</span>
            )}
            <button
              onClick={prevStep}
              className="btn btn-primary float-left my-4"
            >
              Back
            </button>
            <button
              disabled={!(isAnError("address") && isAnError("zipCode"))}
              onClick={nextStep}
              className="btn btn-primary float-right my-4"
            >
              Next
            </button>
          </div>
        );
      }
      case 3: {
        return (
          <div>
            <h1 className="text-4xl py-2 font-bold">Additional Info</h1>
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <label className="input-group">
              <span>+63</span>
              <input
                name="phoneNumber"
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                value={
                  info.basicInfo.phoneNumber === null
                    ? ""
                    : info.basicInfo.phoneNumber
                }
                className={
                  "input input-bordered w-full max-w-xs " +
                  (errors.phoneNumber && "border-rose-500")
                }
                required
              />
            </label>
            {errors.phoneNumber && (
              <span className="label-text text-rose-500">
                {errors.phoneNumber}
              </span>
            )}
            <label className="label">
              <span className="label-text">Biography</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <textarea
              name="bio"
              onChange={(e) => handler.BasicInfoHandler(e)}
              placeholder="Tell us about yourself!"
              value={info.basicInfo.bio === null ? "" : info.basicInfo.bio}
              className="textarea textarea-bordered w-full max-w-xs"
            />
            {errors.bio && (
              <span className="label-text text-rose-500">{errors.bio}</span>
            )}
            {info.basicInfo.isFreelancer && (
              <>
                <label className="label">
                  <span className="label-text">Specialization</span>
                </label>
                <select
                  name="specialization"
                  onChange={handleChange}
                  className="select select-bordered w-full max-w-xs"
                  required
                >
                  <option value={null} disabled selected>
                    Select
                  </option>
                  {specialization.map((value) => {
                    return (
                      <option
                        value={value}
                        key={value}
                        selected={
                          info.freelanceInfo.specialization === value
                            ? true
                            : false
                        }
                      >
                        {value}
                      </option>
                    );
                  })}
                </select>
                <Range
                  name="basePrice"
                  value={info.freelanceInfo.basePrice}
                  onChange={(e) => handler.FreelancerInfoHandler(e)}
                />
              </>
            )}
            <button
              onClick={prevStep}
              className="btn btn-primary float-left my-4"
            >
              Back
            </button>
            {info.basicInfo.isFreelancer ? (
              <button
                onClick={handleSubmit}
                disabled={
                  !(isAnError("phoneNumber") && isAnError("specialization"))
                }
                type="submit"
                className="btn btn-primary float-right my-4"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isAnError("phoneNumber")}
                type="submit"
                className="btn btn-primary float-right my-4"
              >
                Submit
              </button>
            )}
          </div>
        );
      }
      default:
        break;
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="w-full max-w-xs">
          <ul className="steps">
            <li className="step step-primary">Basic Info</li>
            <li className={"step " + (step > 1 ? "step-primary" : "")}>
              Location
            </li>
            <li className={"step " + (step > 2 ? "step-primary" : "")}>
              Personal Info
            </li>
          </ul>
          {formSteps()}
        </div>
      </div>
    </div>
  );
}

export default Register;
