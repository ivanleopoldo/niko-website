import React from 'react'

export function Messagepop() {
  return (
    <div className='mt-10'>
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
              <img src={require('../images/her78.png')} />
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
        <div className=' flex justify-center mt-[330px] '>
        <input type="text" placeholder="Reply...." className="input input-bordered w-full max-w-xl" /> 
        <button className="btn btn-success ml-2.5 divide-x">Send</button>
        </div>
    </div>
  )
}

export default Messagepop