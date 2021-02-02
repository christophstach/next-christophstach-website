import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Default from '../layouts/default'
import { initializeApollo } from '../lib/apolloClient'
import GET_ALL_SKILLS from '../graphql/operations/getAllSkills.graphql'
import { useQuery } from '@apollo/client'
import { GetAllSkillsQuery } from '../generated/graphcms.codegen'
import Badge from '../components/badge/badge'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query: GET_ALL_SKILLS })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: true,
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

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data?.skills.map((skill) => {
            return (
              <span key={skill.id}>
                <Badge>{skill.name}</Badge>{' '}
              </span>
            )
          })
        )}
      </div>
    </Default>
  )
}

export default ProfessionalExperience
