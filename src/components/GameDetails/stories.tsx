import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailProps } from '.'
import mockDetails from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockDetails,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Action']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
