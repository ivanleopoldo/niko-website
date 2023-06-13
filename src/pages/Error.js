import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-9xl">404 Error</h1>
      <p className="text-4xl">Page does not exist.</p>
      <Link to={"/login"} className="hover:text-violet-950">
        Click here to go back
      </Link>
    </div>
  );
}

export default Error;
