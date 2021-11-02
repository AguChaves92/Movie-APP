import {
  GET_ALL,
  GET_BY_NAME,
  GET_MOVIES_DETAIL,
  FILTER,
  RESET,
} from "../actions/types";

const initialState = {
  moviesOriginal: [],
  FilteredMovies: [],
  moviesSearched: [],
  DetailedMovie: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      const moviesSorted = action.payload
        .slice(0)
        .sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1));
      return {
        ...state,
        moviesOriginal: moviesSorted,
        FilteredMovies: moviesSorted,
      };

    case GET_BY_NAME:
      return {
        ...state,
        FilteredMovies: moviesSorted,
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
        FilteredMovies: filteredMovies,
      };
    case GET_MOVIES_DETAIL:
      return {
        ...state,
        DetailedMovie: action.payload,
      };

    case RESET:
      return {
        ...state,
        FilteredMovies: state.moviesOriginal,
      };
    default:
      return state;
  }
};

export default reducer;
