import { gql } from "@apollo/client";

export const GET_DEFAULT = gql`
  query ($Id: Int, $Format: MediaFormat) {
    Media(id: $Id, format: $Format, type: ANIME) {
      id
      averageScore
      season
      seasonYear
      type
      format
      status
      episodes
      duration
      chapters
      volumes
      isAdult
      genres
      title {
        romaji
        english
        native
      }
    }
  }
`;

export const GET_FIRST_TEN = gql`
  query {
    Page(page: 1, perPage: 10) {
      media {
        id
        averageScore
        tags {
          name
          rank
          isGeneralSpoiler
          isMediaSpoiler
          isAdult
        }
        coverImage {
          medium
        }
        title {
          userPreferred
        }
      }
    }
  }
`;

// TODO: Add query Search by name
// TODO: Add query Filter by format
