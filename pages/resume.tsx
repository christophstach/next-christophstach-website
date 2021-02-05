import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Timeline from '../components/timeline/timeline'
import { GetAllTimelineItemsQuery } from '../generated/graphcms.codegen'
import Default from '../layouts/default'
import { initializeApollo } from '../lib/apolloClient'
import GET_ALL_TIMELINE_ITEMS from '../graphql/operations/getAllTimelineItems.graphql'
import { useQuery } from '@apollo/client'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query<GetAllTimelineItemsQuery>({ query: GET_ALL_TIMELINE_ITEMS })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

const Education: NextPage = () => {
  const { error, data } = useQuery<GetAllTimelineItemsQuery>(GET_ALL_TIMELINE_ITEMS)

  if (error) {
    alert(error)
  }

  return (
    <Default>
      <Head>
        <title>Christoph Stach: Education</title>
      </Head>

      {data?.timelineItems && <Timeline items={data.timelineItems} />}
    </Default>
  )
}

export default Education
