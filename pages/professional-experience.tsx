import { useQuery, useApolloClient } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Default from '../layouts/default'

import QUERY_SKILLS from '../graphql/queries/querySkills.graphql'

export const getStaticProps: GetStaticProps = async (context) => {
  // const { loading, data } = useQuery(QUERY_SKILLS)

  return {
    props: {},
  }
}

const ProfessionalExperience: NextPage = () => {
  return (
    <Default>
      <Head>
        <title>Christoph Stach: Professional Experience</title>
      </Head>
    </Default>
  )
}

export default ProfessionalExperience
