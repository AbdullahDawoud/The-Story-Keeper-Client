import { gql } from '@apollo/client';

export const LoadBooksQuery = gql`
    query ($authorId: ID!) {
        books(authorId: $authorId) {
            id
            name
            posterUrl
            author {
                id
                name
            }
            genre
        }
    }
`;