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

export const getBooksByDescPrice = gql`
  query BooksCatalog {
    books(order_by: { price: desc }) {
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

export const getBooksByAscPrice = gql`
  query BooksCatalog {
    books(order_by: { price: asc }) {
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

export const getBooksNew = gql`
  query BooksCatalog {
    books(order_by: { created_at: desc }) {
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

export const getBooksByGenre = (genres) => {
  let finalQueryString = "";
  genres.forEach((genre) => {
    finalQueryString += `{genre: {_eq: "${genre}"}},`;
  });
  return gql`
  query BooksCatalog {
    books(where: {_or: [${finalQueryString}]}) {
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
};
