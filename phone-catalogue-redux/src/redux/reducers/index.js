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

export const getPhones = state => state.data;
export const getPhonesPending = state => state.pending;
export const getPhonesError = state => state.error;

export default phonesReducer


