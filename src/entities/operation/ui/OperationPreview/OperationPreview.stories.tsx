import type { Meta, StoryObj } from '@storybook/react';
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

export const ShortDescription: Story = {
  args: {
    operation: {
      id: 'op-1',
      title: 'Grocery shopping',
      description: 'Bought fruits and vegetables',
      amount: 45.67,
      date: '2024-03-18',
      category: {
        id: 'cat-1',
        name: 'Groceries',
      },
    },
  },
};

export const LongDescription: Story = {
  args: {
    operation: {
      id: 'op-2',
      title: 'Grocery shopping',
      description:
        'Bought fruits, vegetables, bread, milk, cheese and some snacks for the weekend. ' +
        'Also picked up a few household items and cleaning supplies. ' +
        'This description is intentionally long to demonstrate how text truncation works.',
      amount: 128.9,
      date: '2024-03-18',
      category: {
        id: 'cat-1',
        name: 'Groceries',
      },
    },
  },
};
