import React from 'react';
import Messages from './Messages';
import Messagepop from './Messagepop';

function MessageProp() {
  return (
    <div>

    
    <div className="flex justify-start">
      <div className="w-full bg-gray-500 h-[805px] ml-2.5">
      <div className=" w-full  h-[805px] bg-base-100 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="avatar w-24 mb-10 h-24 mt-10 rounded-full ml-2.5 ring ring-success ring-offset-base-100 ring-offset-2 shadow-xl">
                 <img src={require('../images/her78.png')} alt="Profile User" />
                </div>
     
        </div>
        <hr></hr>
        <div>
            <Messagepop/>
        </div>
      </div>
    
      </div>
    </div>
</div>
  );
}

export default MessageProp;
