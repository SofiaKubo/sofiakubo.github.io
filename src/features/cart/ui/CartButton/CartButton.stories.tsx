import type { Meta, StoryObj } from '@storybook/react';
import CartButton from './CartButton';

const meta: Meta<typeof CartButton> = {
  title: 'features/Cart/CartButton',
  component: CartButton,
  argTypes: {
    count: {
      control: { type: 'number', min: 0 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CartButton>;

export const Empty: Story = {
  args: {
    count: 0,
  },
};

export const WithCount: Story = {
  args: {
    count: 2,
  },
};
