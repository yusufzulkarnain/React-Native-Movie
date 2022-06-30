import axios from 'axios';
import {API} from '@res';
export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_UP_COMING = 'GET_MOVIE_UP_COMING';
export const GET_MOVIE_TOP_RATED = 'GET_MOVIE_TOP_RATED';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const GET_MOVIE_GENRE = 'GET_MOVIE_GENRE';
export const GET_MOVIE_BY_GENRE = 'GET_MOVIE_BY_GENRE';

export const getMovie = () => async dispatch => {
  try {
    const res = await axios.get(
      API.movie_popular + 'api_key=' + API.api_key + '&page=1',
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};

export const getMovieUpComing = () => async dispatch => {
  try {
    const res = await axios.get(
      API.movie_up_coming + 'api_key=' + API.api_key + '&page=1',
    );
    dispatch({
      type: GET_MOVIE_UP_COMING,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};

export const getMovieTopRated = () => async dispatch => {
  try {
    const res = await axios.get(
      API.movie_up_top_rated + 'api_key=' + API.api_key + '&page=1',
    );
    dispatch({
      type: GET_MOVIE_TOP_RATED,
      payload: res.data,
      loading: true,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};

export const getMovieDetail = id => async dispatch => {
  try {
    const res = await axios.get(
      API.movie_get_detail + id + '?api_key=' + API.api_key,
    );
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: res.data,
      loadingData: true,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};

export const getMovieGenre = () => async dispatch => {
  try {
    const res = await axios.get(API.movie_get_genre + 'api_key=' + API.api_key);
    dispatch({
      type: GET_MOVIE_GENRE,
      payload: res.data.genres,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};

export const getMovieByGenre = genre => async dispatch => {
  const gen = genre.toLowerCase().replace(' ', '_');
  try {
    const res = await axios.get(
      API.movie_get_detail + gen + '?api_key=' + API.api_key,
    );
    // console.log(JSON.stringify(res.data));
    dispatch({
      type: GET_MOVIE_BY_GENRE,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // });
  }
};
