import React from 'react';
import type { Operation } from '../../model/types';
import './OperationPreview.css';

export interface OperationPreviewProps {
  operation: Operation;
}

export default function OperationPreview({ operation }: OperationPreviewProps) {
  return (
    <div className="operation-preview">
      <p className="operation-amount">${operation.amount}</p>

      <p className="operation-category">{operation.category.name}</p>

      <h2 className="operation-title">{operation.title}</h2>

      <p className="operation-description">{operation.description}</p>
    </div>
  );
}
