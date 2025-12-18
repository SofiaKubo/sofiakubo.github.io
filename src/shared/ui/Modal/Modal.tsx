import React from 'react';
import type { ReactNode } from 'react';
import './Modal.css';

type ModalProps = {
  visible: boolean;
  children: ReactNode;
};

export default function Modal({ visible, children }: ModalProps) {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <button className="modal-close" aria-label="Close">
          ×
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
