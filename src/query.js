import { gql } from "@apollo/client";

export const GET_ANIMES = gql`
  query ($Id: Int) {
    Media(id: $Id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;
