import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { UserAuth } from "../config/context/AuthContext";

import { LoginHandler, ValidationHandler } from "../utils/handlers";
import { LoginController } from "../utils/controllers";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: null,
        password: null,
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const callback = (data) => {
        setLoginInfo({
            ...loginInfo,
            ...data,
        });
    };

    const setErrorState = (name, err_msg = "") => {
        setErrors({
            ...errors,
            [name]: err_msg,
        });
    };

    const auth = UserAuth();

    const handler = new LoginHandler(callback, loginInfo);
    const controller = new LoginController(auth, loginInfo);
    const validation = new ValidationHandler(handler, setErrorState, []);

    const isAnError = (key) => {
        const bool = errors[key] === "";
        return bool;
    };

    const handleChange = (event) => {
        event.preventDefault();

        let name = event.target.name;
        let val = event.target.value;

        validation.validateSignIn(event, name, val);
    };

    useEffect(() => {
        if (auth.currentUser) {
            navigate("/home");
        }
    }, [auth.currentUser, navigate]);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Tekniko</h1>
                    <form
                        onSubmit={controller.handleSignIn}
                        className="form-control"
                    >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            value={
                                loginInfo.email === null ? "" : loginInfo.email
                            }
                            onChange={handleChange}
                            type="email"
                            className={
                                "input input-bordered w-full max-w-xs " +
                                (errors.email && "border-rose-500")
                            }
                        />
                        {errors.email && (
                            <span className="label-text text-rose-500">
                                {errors.email}
                            </span>
                        )}
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            onChange={handleChange}
                            value={
                                loginInfo.password === null
                                    ? ""
                                    : loginInfo.password
                            }
                            type="password"
                            className={
                                "input input-bordered w-full max-w-xs " +
                                (errors.password && "border-rose-500")
                            }
                        />
                        {errors.password && (
                            <span className="label-text text-rose-500">
                                {errors.password}
                            </span>
                        )}
                        <label className="label">
                            <span className="label-text-alt"></span>
                            <span
                                className="label-text-alt hover:text-blue-300"
                                onClick={() => alert("hello")}
                            >
                                Forgot Password?
                            </span>
                        </label>
                        <br></br>
                        <button
                            disabled={
                                !(isAnError("email") && isAnError("password"))
                            }
                            type="submit"
                            className="btn btn-success"
                        >
                            Login
                        </button>
                    </form>
                    <div className="divider"> OR </div>
                    <GoogleButton
                        type="dark"
                        onClick={controller.handleGoogleSignIn}
                        label="Sign in with Google"
                    />
                    <div>
                        <p className="text-xs py-2.5 opacity-50">
                            Don't have an Account?{" "}
                            <Link to={"/register"}>
                                <span className="text-blue-400 hover:text-blue-300">
                                    Register Now!
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
