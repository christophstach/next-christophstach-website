import { useQuery } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Skills from '../components/skills/skills'
import { GetAllSkillsQuery } from '../generated/graphcms.codegen'
import GET_ALL_SKILLS from '../graphql/operations/getAllSkills.gql'
import Default from '../layouts/default'
import { initializeApollo } from '../lib/apolloClient'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query<GetAllSkillsQuery>({ query: GET_ALL_SKILLS })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

const ProfessionalExperience: NextPage = () => {
  const { loading, error, data } = useQuery<GetAllSkillsQuery>(GET_ALL_SKILLS)

  if (error) {
    alert(error)
  }

  return (
    <Default>
      <Head>
        <title>Christoph Stach: Professional Experience</title>
      </Head>

      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {loading ? <div>Loading...</div> : <Skills skills={data?.skills}></Skills>}
      </div>
    </Default>
  )
}

export default ProfessionalExperience
