import React from 'react';
import { Footer, MessageCard2, MessageProp, Navbar } from '../components';
import MessageCard from '../components/MessageCard';
import Messagepop from '../components/Messagepop';

export function Message() {
  return (
    <div>
      <div>
        <Navbar />
        <hr />
      </div>
      <div className="flex">
        <div>
          <MessageCard />
        </div>
        <div className="flex-grow">
          <MessageProp />
        </div>
        
        <div>
            <MessageCard2/>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Message;