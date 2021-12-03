import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://test-image.com',
  title: 'Won games',
  subtitle: '<p>Hello World</p>',
  buttonLink: 'https://test-image.com/games',
  buttonLabel: 'Buy now'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://test-image.com'
    )
  })
})
