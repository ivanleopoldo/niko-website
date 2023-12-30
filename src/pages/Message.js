import React from "react";
import { Footer, MessageCard2, MessageProp, Navbar } from "../components";
import MessageCard from "../components/messagesProps/MessageCard";
import { useParams } from "react-router-dom";

export function Message() {
  let { uid } = useParams();
  return (
    <div>
      <div>
        <Navbar />
        <hr />
      </div>
      <div className="flex">
        {/* <div>
          <MessageCard uid={uid} />
        </div> */}
        <div className="flex-grow">
          <MessageProp uid={uid} />
        </div>
        {/* <div>
          <MessageCard2 />
        </div> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Message;
