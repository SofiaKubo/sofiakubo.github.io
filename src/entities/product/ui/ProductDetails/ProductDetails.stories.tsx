import type { Meta, StoryObj } from '@storybook/react';
import ProductDetails from './ProductDetails';

const meta: Meta<typeof ProductDetails> = {
  title: 'entities/Product/ProductDetails',
  component: ProductDetails,
  argTypes: {
    product: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetails>;

export const Default: Story = {
  args: {
    product: {
      id: 'prod-1',
      title: 'Wireless Headphones',
      description:
        'High-quality wireless headphones with active noise cancellation, long battery life and comfortable ear cushions. Suitable for everyday use, work and travel.',
      price: 199.99,
      image: '/images/headphones.avif',
      category: {
        id: 'cat-1',
        name: 'Electronics',
      },
    },
  },
};
