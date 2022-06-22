import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4plcykh28qn01w7f45t0pdn/master',
  cache: new InMemoryCache()
})