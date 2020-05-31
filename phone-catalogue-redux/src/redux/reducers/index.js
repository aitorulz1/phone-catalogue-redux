import { types } from "../actions/"

export const initialState = {
  pending: false,
  data: [],
  error: null
}

export function phonesReducer(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_DATA:
      return {
        ...state,
        pending: true,
        error: null
      }

    case types.DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data
      }

    case types.DATA_ERROR:
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


