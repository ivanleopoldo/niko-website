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
        <div className="modal-box">
          {children}
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

export default Modal;