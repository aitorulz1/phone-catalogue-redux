import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  REQUEST_DATA,
  DATA_SUCCESS,
  DATA_ERROR
} from '../actions';

import { fetchData } from '.'
import fetchMock from 'fetch-mock'
import PhonesCatalogueService from '../../services/PhonesCatalogueService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore()

describe('Async actions', () => {

  afterEach(() => {
    fetchMock.restore()
  })

  test('Should create an action requestData', () => {
    fetchMock.getOnce(PhonesCatalogueService, {
      body: {}
    })
  })
});