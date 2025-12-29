import type { Meta, StoryObj } from '@storybook/react';
import './OperationPreview.css';
import OperationPreview from './OperationPreview';

const meta: Meta<typeof OperationPreview> = {
  title: 'entities/Operation/OperationPreview',
  component: OperationPreview,
  argTypes: {
    operation: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof OperationPreview>;

export const SampleOperation: Story = {
  args: {
    operation: {
      id: '1',
      title: 'Grocery Shopping',
      description: 'Bought fruits and vegetables',
      amount: 45.67,
      date: '2024-03-18',
      category: {
        id: 'c1',
        name: 'Groceries',
      },
    },
  },
};
