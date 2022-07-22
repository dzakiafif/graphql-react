import { gql } from "@apollo/client";

export const LIST_ANIME = gql`
  query getListAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }

      media(type: ANIME, status: FINISHED, season: SPRING, seasonYear: 2022) {
        id
        title {
          romaji
          native
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export const DETAIL_ANIME = gql`
  query getListAnimeDetail($id: Int) {
    Media(id: $id) {
      title {
        romaji
        native
      }
      type
      status
      format
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
    }
  }
`;
