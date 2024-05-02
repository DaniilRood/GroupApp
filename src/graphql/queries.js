import gql from "graphql-tag";

export const getNewBooks = gql`
  query BooksCatalog {
    books(limit: 6) {
      id
      image
      title
      author
      price
      genre
    }
  }
`;

export const getBooks = gql`
  query BooksCatalog {
    books {
      id
      image
      title
      author
      price
      genre
    }
  }
`;
