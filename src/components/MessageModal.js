import React, { useState } from 'react';
import Messages from './Messages';

export function MessageModal({ isOpen, onClose, children }) {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        checked={isOpen}
        onChange={onClose}
      />
      
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-box">
          {children}
          <div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Messages/>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-secondary flex flex-justify center">
              Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageModal;