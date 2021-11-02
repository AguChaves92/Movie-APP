import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../Redux/actions";
import { Link } from "react-router-dom";
import "./style.css";
import SearchBar from "../searchBar/index";
import StarRating from "../star ratings";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const state = useSelector((state) => state.FilteredMovies);

  return (
    <div>
      <div className="container">
        <div className="search_container">
          <div  className="home_searchbar">
          <SearchBar />
          </div>
          <div className="home_star">
          <h2 className="home_subtitle">Filter by popularity:</h2>
          <StarRating />
          </div>
        </div>
        <div className="list">
          {state.map((movie) => (
            <Link to={"movie_det/" + movie.id}>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="not found"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
