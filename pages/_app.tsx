import type { AppProps /*, AppContext */ } from 'next/app'

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

import '../styles/globals.css'
import withApollo from 'next-with-apollo'

function App({ Component, pageProps, apollo }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'https://mysite.com/graphql',
    cache: new InMemoryCache().restore(initialState || {}),
  })
})(App)
