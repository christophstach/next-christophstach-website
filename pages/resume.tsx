import { useQuery } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import Timeline from '../components/timeline/timeline'
import { GetAllTimelineItemsQuery } from '../generated/graphcms.codegen'
import GET_ALL_TIMELINE_ITEMS from '../graphql/operations/getAllTimelineItems.gql'
import { initializeApollo } from '../lib/apolloClient'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query<GetAllTimelineItemsQuery>({ query: GET_ALL_TIMELINE_ITEMS })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 60,
  }
}

const Education: NextPage = () => {
  const { error, data } = useQuery<GetAllTimelineItemsQuery>(GET_ALL_TIMELINE_ITEMS)

  if (error) {
    alert(error)
  }

  return (
    <>
      <Head>
        <title>Christoph Stach: Education</title>
      </Head>

      {data?.timelineItems && <Timeline items={data.timelineItems} />}
    </>
  )
}

export default Education
