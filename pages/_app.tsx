import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import { motion, Variants } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useApollo } from '../lib/apolloClient'

const variants: Variants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
}
function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta name="description" content="Website of Christoph Stach" />
        <meta name="keywords" content="Christoph Stach, Software Engineer, Full-Stack Developer" />

        <title>Christoph Stach</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>

        <meta name="theme-color" content="#317EFB" />
      </Head>

      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={variants}
      >
        <Component {...pageProps} />
      </motion.div>
    </ApolloProvider>
  )
}

export default MyApp
