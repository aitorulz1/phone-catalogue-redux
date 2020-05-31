import PhonesCatalogueService from "../../services/PhonesCatalogueService";

export const types = {
  REQUEST_DATA: 'REQUEST_DATA',
  DATA_SUCCESS: 'DATA_SUCCESS',
  DATA_ERROR: 'FETCH_DATA_ERROR'
};

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

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(requestData())
    const response = await PhonesCatalogueService.list()
    dispatch(dataSuccess(response.data))
  } catch (error) {
    dispatch(fetchDataError(error))
  }
}






