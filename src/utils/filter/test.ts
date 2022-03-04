import { FilterType } from 'components/ExploreSidebar'
import { parseQueryStringToWhere, parseQueryStringToFilter } from '.'

const filterItems = [
  { name: 'price_lte', type: FilterType.RADIO },
  { name: 'platforms', type: FilterType.CHECKBOX },
  { name: 'developers', type: FilterType.CHECKBOX },
  { name: 'sort', type: FilterType.RADIO }
]

const queryString = {
  price_lte: 100,
  platforms: ['windows', 'linux'],
  developers: 'Rockstar Games',
  sort: 'price:asc'
}

describe('parseQueryStringToWhere', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 100,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'Rockstar Games' }
    })
  })
})

describe('parseQueryStringToFilter', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price_lte: 100,
      platforms: ['windows', 'linux'],
      developers: ['Rockstar Games'],
      sort: 'price:asc'
    })
  })
})
