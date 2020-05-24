import PhonesCatalogueService from "../../services/PhonesCatalogueService";

export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'FETCH_DATA_ERROR';

function requestData() {
  return {
    type: 'REQUEST_DATA',
  }
}

function dataSuccess(data) {
  return {
    type: 'DATA_SUCCESS',
    payload: { data }
  }
}

function fetchDataError(error) {
  return {
    type: 'DATA_ERROR',
    payload: { error }
  }
}

export const fetchData = () => {
  return async dispatch => {
    dispatch(requestData())
    try {
      let phones = await PhonesCatalogueService.list()
      dispatch(dataSuccess(phones.data))
    }
    catch(error){
      dispatch(fetchDataError(error))
    }
  }
}


// export const fetchData = () => {
//   return async dispatch => {
//     dispatch(requestData());
//     fetch(PhonesCatalogueService.list())
//     .then(response => response.json())
//     .then(response => {
//       if(response.error) throw(response.error)

//       dispatch(dataSuccess(response.phones))
//     })

//     .catch(error => dispatch(fetchDataError(error)))
//   }
// }




