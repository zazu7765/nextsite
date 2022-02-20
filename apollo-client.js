import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/fephzb88zbp7",
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
export default client;
