import { AppLink } from '../../app/components/atoms/appLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppLink> = {
  title: 'Example/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'hypertext reference string',
      type: { name: 'string', required: true },
      defaultValue: '/',
    },
    children: {
      description: 'ReactNode',
      type: { name: 'React.ReactNode', required: true },
    },
    external: {
      description: 'external or internal link',
      type: { name: 'boolean', required: false },
      defaultValue: false,
    }
  }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const InternalLink: Story = {
  args: {
    href: '/',
    children: 'InternalLink',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://www.google.com',
    children: 'ExternalLink',
  },
};

export const ExternalParamLink: Story = {
  args: {
    href: '/',
    children: 'ExternalParamLink',
    external: true,
  },
};
