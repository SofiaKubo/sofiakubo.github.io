import type { Meta, StoryObj } from '@storybook/react';
import OperationDetails from './OperationDetails';

const meta: Meta<typeof OperationDetails> = {
  title: 'entities/Operation/OperationDetails',
  component: OperationDetails,
  argTypes: {
    operation: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof OperationDetails>;

export const Default: Story = {
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
