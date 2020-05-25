import PhonesCatalogueService from "../../services/PhonesCatalogueService";

export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'FETCH_DATA_ERROR';

const requestData = () => {
  return {
    type: 'REQUEST_DATA',
  }
}

const dataSuccess = (data) => {
  return {
    type: 'DATA_SUCCESS',
    payload: { data }
  }
}

const fetchDataError = (error) => {
  return {
    type: 'DATA_ERROR',
    payload: { error }
  }
}

export const fetchData = () => {
  return async dispatch => {
    dispatch(requestData())
    PhonesCatalogueService.list()
    .then(response => {
      dispatch(dataSuccess(response.data))
    }).catch(error => dispatch(fetchDataError(error)))
  }
}






