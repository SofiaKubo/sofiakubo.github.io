import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import './Modal.stories.css';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
    children: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ConfirmLike: Story = {
  args: {
    visible: true,
  },
  render: (args) => (
    <Modal {...args}>
      <div className="confirm">
        <div className="confirm-header">
          <span className="confirm-title">Question</span>
        </div>

        <div className="confirm-body">Are you sure to leave?</div>

        <div className="confirm-actions">
          <button className="confirm-btn" type="button">
            OK
          </button>
          <button className="confirm-btn" type="button">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  ),
};

export const Closed: Story = {
  args: {
    visible: false,
  },
  render: (args) => (
    <div style={{ padding: 20 }}>
      <p>Page content behind modal</p>

      <Modal {...args}>
        <div>This content is hidden</div>
      </Modal>
    </div>
  ),
};

export const OnlyText: Story = {
  args: {
    visible: true,
  },
  render: (args) => (
    <Modal {...args}>
      <p style={{ margin: 0 }}>This is a simple modal with text only</p>
    </Modal>
  ),
};
