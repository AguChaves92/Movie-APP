import React from "react";
import  {getMoviesByName}  from "../../Redux/actions/index";
import { useDispatch} from 'react-redux'
import { useState } from "react";
import './index.css'


function SearchBar (props) {

  const dispatch = useDispatch();

    const [state, setState] = useState("");

    function handleChange(e) {
      setState(e.target.value);
      
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      dispatch(getMoviesByName(state)) //dispatches state to reducer
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Find Movies"
            value={state}
            onChange={(e) => handleChange(e)}
            className="searchbar"
          />
          <button type="submit" className="sb_btn"> GO </button>
        </form>
      </div>
    );
}



  

export default SearchBar