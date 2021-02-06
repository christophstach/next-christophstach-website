import { useQuery } from '@apollo/client'
import { formatDistance, subDays } from 'date-fns'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { GetAllHomeArticlesQuery } from '../generated/graphcms.codegen'
import GET_ALL_HOME_ARTICLES from '../graphql/operations/getAllHomeArticles.gql'
import Default from '../layouts/default'
import { initializeApollo } from '../lib/apolloClient'
import markdownToHtml from '../lib/markdownToHtml'

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query<GetAllHomeArticlesQuery>({
    query: GET_ALL_HOME_ARTICLES,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

const Home: NextPage = () => {
  const { loading, error, data } = useQuery<GetAllHomeArticlesQuery>(GET_ALL_HOME_ARTICLES)
  const articles = data
    ? data.homeArticles.map((article) => {
        const content = article.content ? markdownToHtml(article.content) : ''

        return {
          ...article,
          content,
        }
      })
    : []

  if (error) {
    alert(error)
  }

  return (
    <Default>
      <Head>
        <title>Christoph Stach: Home</title>
      </Head>

      <div className="py-10">
        {loading ? (
          <div>Loading...</div>
        ) : (
          articles.map((article) => {
            return (
              <article key={article.id} className="mx-auto prose lg:prose-xl prose-primary">
                <h1>{article.title}</h1>
                <small className="block text-gray-400">
                  {`
                    ${article.author?.firstName}
                    ${article.author?.lastName} - 
                    ${formatDistance(subDays(new Date(), 3), new Date(article.createdAt))}
                  `}
                </small>

                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content,
                  }}
                ></div>
              </article>
            )
          })
        )}
      </div>
    </Default>
  )
}

export default Home
