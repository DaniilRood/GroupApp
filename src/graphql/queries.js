import gql from "graphql-tag";

export const getBooks = gql`
  query BooksCatalog {
    books {
      id
      image
      title
      author
      price
      genre
      new
    }
  }
`;
