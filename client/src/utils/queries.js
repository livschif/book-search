import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBook {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;