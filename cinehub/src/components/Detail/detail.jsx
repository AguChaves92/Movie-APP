import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";
import { getMovieDetails } from "../../Redux/actions/index";
import SearchBar from "../searchBar/index";

function Detail(props) {
  const movie = useSelector((state) => state.DetailedMovie);
  const dispatch = useDispatch();
  console.log(movie);

  useEffect(() => {
    dispatch(getMovieDetails(props.match.params.id));
  }, [dispatch]);

  return (
    <div>
      <div className="detail_div">
        <Link to="/">
          <button className="detail_home">Home</button>
        </Link>
        <SearchBar />
      </div>

      <div className="detail_container_back">
        <div className="detail_container">
          <div>
            <div>
              <h1>{movie.title}</h1>
              <div>
                <img
                  className="detail_container_img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="not found"
                />
              </div>
              <div className="detail_container_genre_container">
                {movie.genres?.map((genre) => (
                  <div className="detail_container_genres" key={genre.id}>
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="detail_container_info">
            <div>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
            <div>
              <h2>Release Date</h2>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <h2>Rating</h2>
              <p>{movie.vote_average}</p>
            </div>
            <div>
              <h2>Revenue</h2>
              <p>U$D:{movie.revenue}</p>
            </div>
            <div>
              <h2>Translations</h2>
              {movie.spoken_languages?.map((language) => (
                <div key={language.iso_639_1}>{language.name}</div>
              ))}
            </div>
            <div>
              <h2>status</h2>
              <p>{movie.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
