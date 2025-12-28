import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'shared/Layout',
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => (
    <Layout>
      <div style={{ background: '#eee', padding: 16 }}>Page content</div>
    </Layout>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Layout>
      <div style={{ height: 1200, background: '#eee', padding: 16 }}>Long page content (scroll)</div>
    </Layout>
  ),
};
