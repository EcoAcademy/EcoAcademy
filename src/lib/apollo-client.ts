// src/lib/apollo-client.ts

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('hasura_token'); // Get token from cookies

  // Check if token exists
  if (!token) {
    // Redirect to landing page if user is not authenticated
    const router = useRouter();
    router.push('/'); // Adjust to your landing page route
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
