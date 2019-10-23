import {ApolloClient, ApolloLink} from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

import asyncStorage from './async-storage';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4444/',
});

const getToken = async () => {
  const token = await asyncStorage.getToken();
  return token;
};

const authLink = new ApolloLink((operation, forward) => {
  const token = getToken();
  console.log(token);
  operation.setContext({
    headers: {
      authorization: token ? `Barer ${token}` : '',
    },
  });
  return forward(operation);
});

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: authLink.concat(link),

  // Provide some optional constructor fields
  name: 'primepix-app',
  version: '0.1',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
