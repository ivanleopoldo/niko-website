import React from 'react';

function Messages() {
  return (
    <div>
        <div className="chat chat-start ">
          <div className="chat-image avatar avatar online">
            <div className="w-10 rounded-full">
              <img src={require('../images/Top KIM.jpg')} />
            </div>
          </div>
          <div className="chat-header">
            Kim Jung un
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">Send feet pics!!</div>
          <div className="chat-footer opacity-50">
            Delivered
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar avatar offline">
            <div className="w-10 rounded-full">
              <img src={require('../images/her78.PNG')} />
            </div>
          </div>
          <div className="chat-header">
            Xia bao mao
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">Bruh...</div>
          <div className="chat-footer opacity-50">
            Seen at 12:46
          </div>
        </div>
        <div className='mt-2.5'>
        <input type="text" placeholder="Reply...." className="input input-bordered w-full max-w-xs" /> 
        <button className="btn btn-success ml-2.5 divide-x">Send</button>
        </div>
    </div>


  );
}

export default Messages;