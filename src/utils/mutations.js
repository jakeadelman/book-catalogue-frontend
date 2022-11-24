import { gql } from '@apollo/client';

export const MUTATION_CREATE_USER = gql`
  mutation createUser($username:String!, $email:String!, $password:String!){
    createUser(username:$username, email:$email, password:$password){
        token
        user{
            _id
            username
            email
        }
    }
  }
`;


export const MUTATION_LOGIN_USER = gql`
mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
        email
        _id
      }
    }
  }
`;



export const MUTATION_SAVE_BOOK = gql`
mutation Mutation($bookId: String!, $description: String!, $image: String!, $title: String!, $token: String!, $authors: [String!]) {
    saveBook(bookId: $bookId, description: $description, image: $image, title: $title, token: $token, authors: $authors) {
      _id
      email
      password
      savedBooks {
        bookId
      }
    }
  }
`

export const MUTATION_DELETE_BOOK = gql`
mutation Mutation($bookId: String!, $token: String!) {
    deleteBook(bookId: $bookId, token: $token) {
      _id
      email
      password
      username
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

