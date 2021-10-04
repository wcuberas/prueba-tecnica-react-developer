import data from '../components/data/sample.json';

export const GET_SERIES = "GET_SERIES"
export const GET_MOVIES = "GET_MOVIES"

export function getSeries() {
    return function (dispatch) {
      dispatch({
        type: GET_SERIES,
        payload: data.entries.filter(elem => elem.releaseYear >= 2010)
            .filter(elem => elem.programType === 'series')
            .sort((a,b) => a.title > b.title ? 1 : -1)
            .slice(0,20)
      });
    }
  }

export function getMovies() {
  return function (dispatch) {
    dispatch({
      type: GET_MOVIES,
      payload: data.entries.filter(elem => elem.releaseYear >= 2010)
          .filter(elem => elem.programType === 'movie')
          .sort((a,b) => a.title > b.title ? 1 : -1)
          .slice(0,20)
    });
  }
}




