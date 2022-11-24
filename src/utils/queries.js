import { gql } from '@apollo/client';

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
query GetSingleUser($token: String!) {
    getSingleUser(token: $token) {
      savedBooks {
        _id
        authors
        bookId
        description
        image
        link
        title
      }
      
    }
  }
`
