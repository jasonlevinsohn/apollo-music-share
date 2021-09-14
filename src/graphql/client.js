import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://faithful-griffon-37.hasura.app/v1/graphql",
  headers: {
    "content-type": "application-json",
    "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_TOKEN,
  },
});

export default client;
