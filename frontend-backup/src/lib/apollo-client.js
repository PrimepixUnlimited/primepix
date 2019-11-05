import {ApolloClient} from 'apollo-boost';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';

import asyncStorage from './async-storage';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: 'http://localhost:4444/',
});

let token;

const withToken = setContext(async request => {
  if (!token) {
    token = await asyncStorage.getToken();
  }
  return {
    headers: {
      authorization: token,
    },
  };
});

const resetToken = onError(({networkError}) => {
  if (networkError && networkError.statusCode === 401) {
    // remove cached token on 401 from the server
    token = undefined;
  }
});

const authFlowLink = withToken.concat(resetToken);

const link = authFlowLink.concat(httpLink);

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

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
