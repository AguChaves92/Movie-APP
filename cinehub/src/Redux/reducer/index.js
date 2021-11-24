import {
  GET_ALL,
  GET_BY_NAME,
  GET_MOVIES_DETAIL,
  FILTER,
  RESET,
} from "../actions/types";

const initialState = {
  mainMovie:{},
 
  filteredMovies: [],
  moviesSearched: [],
  detailedMovie: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      console.log(action.payload);
      const moviesSorted = action.payload.sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1));
      return {
        ...state,
  
        moviesOriginal: moviesSorted,
        filteredMovies: moviesSorted,
      };

    case GET_BY_NAME:
      return {
        ...state,
        filteredMovies: moviesSorted,
      };

    case FILTER:
      console.log("in filter", action.payload);
      let filteredMovies = [];
      for (let i = 0; i < state.moviesOriginal.length; i++) {
        if (
          Math.floor(state.moviesOriginal[i].vote_average) ==
            action.payload * 2 ||
          Math.floor(state.moviesOriginal[i].vote_average) ==
            action.payload * 2 - 1
        ) {
          filteredMovies.push(state.moviesOriginal[i]);
        }
      }

      return {
        ...state,
        filteredMovies: filteredMovies,
      };
    case GET_MOVIES_DETAIL:
      return {
        ...state,
        detailedMovie: action.payload,
      };

    case RESET:
      return {
        ...state,
        filteredMovies: state.moviesOriginal,
      };
    default:
      return state;
  }
};

export default reducer;
