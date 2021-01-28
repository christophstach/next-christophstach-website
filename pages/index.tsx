import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Default from '../layouts/default'

const Home: NextPage = () => {
  return (
    <Default>
      <Head>
        <title>Christoph Stach: Home</title>
      </Head>
    </Default>
  )
}

export default Home
