import React from 'react';
import type { Operation } from '../../model/types';
import './OperationDetails.css';

export interface OperationDetailsProps {
  operation: Operation;
}

export default function OperationDetails({ operation }: OperationDetailsProps) {
  return (
    <div className="operation-details">
      <div className="operation-details__header">
        <span className="operation-details__amount">${operation.amount.toFixed(2)}</span>

        <div className="operation-details__meta">
          <span className="operation-details__category">{operation.category.name}</span>
          <span className="operation-details__date">{operation.date}</span>
        </div>
      </div>

      <div className="operation-details__body">
        <h3 className="operation-details__title">{operation.title}</h3>

        <p className="operation-details__description">{operation.description}</p>

        <div className="operation-details__actions">
          <button className="confirm-btn" type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
