import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: {
      banners,
      newGames,
      upcomingGames,
      freeGames,
      popularGames,
      sections
    }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: '2021-01-29' }
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(popularGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingMoreGames: gamesMapper(upcomingGames),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      freeGames: gamesMapper(freeGames),
      freeGamesHighlight: highlightMapper(sections?.freeGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title
    }
  }
}
