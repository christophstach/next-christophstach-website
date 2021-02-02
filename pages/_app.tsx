import type { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'

import '../styles/globals.css'
import { useApollo } from '../lib/apolloClient'

function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
