import React from "react";
import { Link } from "react-router-dom";
import error from "./Error.json";
import Lottie from "lottie-react";



function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <Lottie animationData={error} style = {{width:"70%"}}/>
      <p className="text-4xl">Page does not exist.</p>
      <Link to={"/login"} className="hover:text-violet-950" >
        Click here to go back
      </Link>
    </div>
  );
}

export default Error;
