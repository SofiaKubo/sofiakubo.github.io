import React from 'react';
import './Modal.css';

export interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({ visible, children, className }: ModalProps) {
  return (
    <div
      className={['modal-overlay', className].filter(Boolean).join(' ')}
      data-visible={visible ? 'true' : 'false'}
      aria-hidden={!visible}
    >
      <div className="modal-window" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Close" type="button">
          ×
        </button>

        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
