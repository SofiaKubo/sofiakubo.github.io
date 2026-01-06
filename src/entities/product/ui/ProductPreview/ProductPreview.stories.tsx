import type { Meta, StoryObj } from '@storybook/react';
import ProductPreview from './ProductPreview';

const meta: Meta<typeof ProductPreview> = {
  title: 'entities/Product/ProductPreview',
  component: ProductPreview,
  argTypes: {
    product: { control: false },
  },
};
export default meta;

type Story = StoryObj<typeof ProductPreview>;

export const ShortDescription: Story = {
  args: {
    product: {
      id: 'prod-1',
      title: 'Wireless Headphones',
      description: 'High-quality wireless headphones suitable for everyday use.',
      price: 199.99,
      image: '/images/headphones.avif',
      category: {
        id: 'cat-1',
        name: 'Electronics',
      },
    },
    cartCount: 0,
  },
};

export const LongDescription: Story = {
  args: {
    product: {
      id: 'prod-2',
      title: 'Wireless Headphones',
      description:
        'High-quality wireless headphones with active noise cancellation, long battery life and comfortable ear cushions. Suitable for everyday use, work and travel. These premium headphones feature advanced Bluetooth 5.0 technology for seamless connectivity, touch controls for easy operation, and a foldable design for portability. The rechargeable battery provides up to 30 hours of continuous playback, and the quick charge feature gives you 5 hours of use with just 10 minutes of charging. Compatible with all major devices and voice assistants.',
      price: 199.99,
      image: '/images/headphones.avif',
      category: {
        id: 'cat-1',
        name: 'Electronics',
      },
    },
    cartCount: 0,
  },
};

export const WithItemsInCart: Story = {
  args: {
    product: {
      id: 'prod-1',
      title: 'Wireless Headphones',
      description: 'High-quality wireless headphones suitable for everyday use.',
      price: 199.99,
      image: '/images/headphones.avif',
      category: {
        id: 'cat-1',
        name: 'Electronics',
      },
    },
    cartCount: 3,
  },
};
