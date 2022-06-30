import {
  GET_MOVIE,
  GET_MOVIE_UP_COMING,
  GET_MOVIE_TOP_RATED,
  GET_MOVIE_DETAIL,
  GET_MOVIE_GENRE,
  GET_MOVIE_BY_GENRE,
} from './actions';

const initialState = {
  name: 'yusuf zulkarnain',
  movie: {},
  movie_up_coming: {},
  movie_top_rated: {},
  movie_detail: {},
  movie_genre: [],
  movie_by_genre: {},
  loading: false,
  loadingData: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {...state, movie: action.payload};
    case GET_MOVIE_UP_COMING:
      return {...state, movie_up_coming: action.payload};
    case GET_MOVIE_TOP_RATED:
      return {
        ...state,
        movie_top_rated: action.payload,
        loading: action.loading,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movie_detail: action.payload,
        loadingData: action.loadingData,
      };
    case GET_MOVIE_GENRE:
      return {
        ...state,
        movie_genre: action.payload,
      };
    case GET_MOVIE_BY_GENRE:
      return {
        ...state,
        movie_by_genre: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
