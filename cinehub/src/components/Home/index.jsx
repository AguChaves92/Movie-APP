import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../Redux/actions";
import { Link } from "react-router-dom";
import "./style.css";
import SearchBar from "../searchBar/index";
import StarRating from "../star ratings";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const state = useSelector((state) => state.filteredMovies);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  var mystyle={
    width: "100%",

  }
  

  return (
    <div>
      <div className="container">
        <div className="search_container">
          <div className="home_searchbar">
            <SearchBar />
          </div>
          <div className="home_star">
            <h2 className="home_subtitle">Filter by popularity:</h2>
            <StarRating />
          </div>
        </div>

        <div>

       
          <Carousel responsive={responsive} className="carousel" >
          {state.map((movie) => (
            <Link to={"movie_det/" + movie.id}>
              <img className="img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="not found"
              />
            </Link>
          ))}
          </Carousel>
          
          </div>
      </div>
    </div>
  );
}
