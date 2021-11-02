import React from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useDispatch } from "react-redux";
import {FilteredMovies} from "../../Redux/actions/index"

const StarRating = () => {

  const dispatch=useDispatch();

  const [rating, setRating] = React.useState(null);
  const [hover, setHover] = React.useState(null);


  const filter= function (value){
    console.log("in filter ", value)
    if(value===rating){
      setRating(null)
      dispatch(FilteredMovies(null))
    }
    else{
      setRating(value)
      dispatch(FilteredMovies(value))
    }
  }


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              onClick={()=> filter(ratingValue) } 
            />
            <FaStar
              className="star"
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
