import React from 'react';
import type { ReactNode } from 'react';
import './Modal.css';

type ModalProps = {
  visible: boolean;
  children: ReactNode;
};

export default function Modal({ visible, children }: ModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close">×</button>
        {children}
      </div>
    </div>
  );
}
