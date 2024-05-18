import { useQuery } from "@apollo/client";
import { GET_ANIMES } from "../query";

function AnimeList() {
  const { data, loading, error } = useQuery(GET_ANIMES, {
    variables: { Id: 15125 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let parsedData = Object.values(data);

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
      <details open>
        <pre>{JSON.stringify(data.Media, null, 2)}</pre>
      </details>

      <ul>
        {parsedData.map((anime) => (
          <li key={anime.id}>
            [{anime.id}] {anime.title?.english} ({anime.title?.native})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
