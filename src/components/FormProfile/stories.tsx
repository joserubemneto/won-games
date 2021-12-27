import { Story, Meta } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 800, margin: 'auto' }}>
    <FormProfile />
  </div>
)
