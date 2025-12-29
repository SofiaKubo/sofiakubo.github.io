import React from 'react';
import type { Operation } from '../../model/types';
import './OperationPreview.css';

export interface OperationPreviewProps {
  operation: Operation;
}

export default function OperationPreview({ operation }: OperationPreviewProps) {
  return (
    <div className="operation-preview">
      <div className="operation-preview__header">
        <span className="operation-preview__amount">${operation.amount}</span>

        <span className="operation-preview__category">{operation.category.name}</span>
      </div>

      <div className="operation-preview__body">
        <h3 className="operation-preview__title">{operation.title}</h3>

        <p className="operation-preview__description">{operation.description}</p>
      </div>
    </div>
  );
}
