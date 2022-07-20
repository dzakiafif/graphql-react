import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

const client = new ApolloClient({
  uri: process.env.REACT_APP_ANILIST,
  cache: new InMemoryCache(),
  defaultOptions
});

const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
