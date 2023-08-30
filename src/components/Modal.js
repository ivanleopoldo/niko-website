import React from 'react';

function Modal({ isOpen, onClose, children }) {
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
        <div className="modal-action">
          <div className="modal-box">
            {children}
          </div>
          <label htmlFor="my-modal" className="btn btn-error flex items-center btn btn-circle">
            <span>{/* Add your label text here */}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
      </div>
        {/* <div className="modal-box">
          {children}
          
          </div> */}
        </div>
    //   </div>
    // </div>
  );
}

export default Modal;