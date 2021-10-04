import { GET_SERIES, GET_MOVIES } from '../Actions/Actions'


const initialState = {       
    seriesLoaded: [],
    moviesLoaded: [],
  };

  function rootReducer(state = initialState, action) {
    if (action.type === GET_SERIES) {
        return {
          ...state,
          seriesLoaded: action.payload
        };
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload
        };
    }
    return state;
  }
  
  export default rootReducer;
