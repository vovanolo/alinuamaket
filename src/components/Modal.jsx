import React from 'react';

export default function Modal({ children, visible, toggleVisible }) {
  if (visible) {
    return (
      <div>
        <div className="modal-overlay" onClick={toggleVisible} />
        {children}
      </div>
    );
  }

  return null;
}
