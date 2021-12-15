import { screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Showcase from '.'

const props = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(
      <Showcase
        title={props.title}
        games={props.games}
        hightlight={props.highlight}
      />
    )

    expect(screen.getByRole('heading', { name: /most popular/i }))

    expect(screen.getByRole('heading', { name: highlightMock.title }))

    expect(screen.getByRole('heading', { name: gamesMock[0].title }))
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase games={props.games} hightlight={props.highlight} />
    )

    expect(screen.getByRole('heading', { name: highlightMock.title }))

    expect(screen.getByRole('heading', { name: gamesMock[0].title }))

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(screen.getByRole('heading', { name: /most popular/i }))

    expect(screen.getByRole('heading', { name: gamesMock[0].title }))

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} hightlight={props.highlight} />
    )

    expect(screen.getByRole('heading', { name: /most popular/i }))

    expect(screen.getByRole('heading', { name: highlightMock.title }))

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
