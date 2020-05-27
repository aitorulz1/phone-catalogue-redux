import {
  REQUEST_DATA,
  DATA_SUCCESS,
  DATA_ERROR
} from '../actions';

const initialState = {
  pending: false,
  data: [],
  error: null
}

export function phonesReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        pending: true,
        error: null
      }

    case DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data
      }

    case DATA_ERROR:
      return {
        ...state,
        pending:false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default phonesReducer


