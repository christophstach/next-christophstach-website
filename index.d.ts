import { DocumentNode } from 'graphql'

declare module '*.gql' {
  const value: DocumentNode
  export = value
}

declare module 'remark-prism'
declare module 'remark-highlight.js'
