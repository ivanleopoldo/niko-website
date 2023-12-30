import React from "react";
import { auth } from "../../config";

export function Messagepop() {
  return (
    <div className="mt-5">
      <div></div>
      <div className="chat chat-start "></div>
      <div className="chat chat-end">
        <div className="chat-image avatar avatar online">
          <div className="w-10 rounded-full">
            <img src={auth.currentUser.photoURL} />
          </div>
        </div>
        <div className="chat-header">{auth.currentUser.displayName}</div>
        <div className="chat-bubble">Available?</div>
      </div>
      <div className=" flex justify-center mt-[230px] ">
        <input
          type="text"
          placeholder="Reply...."
          className="input input-bordered w-full max-w-xl"
        />
        <button className="btn btn-success ml-2.5 divide-x">Send</button>
      </div>
    </div>
  );
}

export default Messagepop;
