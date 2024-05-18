import { useQuery } from "@apollo/client";
import { GET_DEFAULT, GET_FIRST_TEN } from "../query";

function AnimeList() {
  const { data, loading, error } = useQuery(GET_FIRST_TEN, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let parsedData = Object.values(data.Page.media);

  // Response example
  //   {
  //     "data": {
  //         "Media": {
  //             "id": 15125,
  //             "title": {
  //                 "romaji": "Teekyuu",
  //                 "english": "Teekyuu",
  //                 "native": "てーきゅう"
  //             }
  //         }
  //     }
  // }

  return (
    <div>
      <ul>
        {parsedData.map((anime) => (
          <li key={anime.id}>
            [{anime.id}] {anime.title.userPreferred} ({anime.averageScore})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
