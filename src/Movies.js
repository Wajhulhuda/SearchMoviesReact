import React, { useContext } from "react";
import { AppContext } from "./context";

const Movies = () => {
  const { movie, isLoading } = useContext(AppContext);
  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="text-center">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <div className="container my-3 d-flex  flex-wrap justify-content-center">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const titles = Title.length >= 15 ? Title.substring(0, 15) : Title;
          return (
            <div
              className="col-md-6 col-sm-12 gap-3 col-lg-3 m-3 border-0 px-3 mx-auto card"
              key={imdbID}
            >
              <h3>{titles.length >= 15 ? titles + "..." : titles}</h3>
              <img src={Poster} alt={imdbID} width="70%" height="250px" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
