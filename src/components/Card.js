import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ image, name, bio, date, tags }) {
  const notify = (e) => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve() || reject();
        }, 2000);
      }),
      {
        pending: "Loading Process",
        success: "Booked Successfully.",
        error: "Cannot be booked please Try again...",
      },
      {
        autoClose: 2000,
      }
    );
  };

  return (
    <div className="card">
      <div className="card w-auto bg-base-100 shadow-xs">
        <figure className="px-10 pt-10 ">
          <div className="w-64 ">
            <img src={""} alt="User Image" className="rounded-xl" />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <div className="card-actions ml-24">
            <button className="badge badge-outline">{tags[0]}</button>
            <button className="badge badge-outline">{tags[1]}</button>
            <a>Year started: {date}</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <div classname="flex justify">
              <label classname="label">
                <span className="label-text">Certification </span>
              </label>
              <label htmlFor="my-modal-4" className="btn btn glass">
                View Certificate
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <div>
                    <img src={require("../images/MockCertif.png")} />
                  </div>
                </label>
              </label>
            </div>
          </div>
          <hr></hr>
          <div>
            <button className="btn btn-success " onClick={notify}>
              Hire now{" "}
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              limit={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
