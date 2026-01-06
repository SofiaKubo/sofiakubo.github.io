import type { Meta, StoryObj } from '@storybook/react';
import ProductCartItem from './ProductCartItem';

const meta: Meta<typeof ProductCartItem> = {
  title: 'entities/Product/ProductCartItem',
  component: ProductCartItem,
  argTypes: {
    product: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCartItem>;

export const SingleItem: Story = {
  args: {
    product: {
      id: 'prod-1',
      title: 'Wireless Headphones',
      price: 199.99,
      image: '/images/headphones.avif',
    },
    quantity: 1,
  },
};

export const MultipleItems: Story = {
  args: {
    product: {
      id: 'prod-1',
      title: 'Wireless Headphones',
      price: 199.99,
      image: '/images/headphones.avif',
    },
    quantity: 3,
  },
};
