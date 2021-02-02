import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Default from '../layouts/default'
import { initializeApollo } from '../lib/apolloClient'
import GET_ALL_SKILLS from '../graphql/operations/getAllSkills.graphql'
import { useQuery } from '@apollo/client'
import { GetAllSkillsQuery } from '../generated/graphcms.codegen'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query: GET_ALL_SKILLS })

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

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data?.skills.map((skill) => {
            return (
              <span
                className="bg-blue-400 rounded-xl px-3 mx-1 font-bold text-xs border-blue-400 text-white border-2"
                key={skill.id}
              >
                {skill.name}
              </span>
            )
          })
        )}
      </div>
    </Default>
  )
}

export default ProfessionalExperience
