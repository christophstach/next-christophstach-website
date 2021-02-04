import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Timeline from '../components/timeline/timeline'
import Default from '../layouts/default'

const Education: NextPage = () => {
  return (
    <Default>
      <Head>
        <title>Christoph Stach: Education</title>
      </Head>

      <Timeline />
    </Default>
  )
}

export default Education
