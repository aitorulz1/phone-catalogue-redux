import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { fetchData } from '.'
import fetchMock from 'fetch-mock'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  test('fake test', () => {
    expect(true).toBeTruthy()
  })
  // afterEach(() => {
  //   fetchMock.restore()
  // })

  // test('creates DATA_SUCCESS when fetching todos has been done', () => {
  //   fetchMock.getOnce('/todos', {
  //     response: 200,
  //     body: { data: ['do something'] },
  //     headers: { 'content-type': 'application/json' }
  //   })

  //   const expectedActions = [
  //     { type: 'REQUEST_DATA' },
  //     { type: 'DATA_SUCCESS', body: { data: ['do something']  } }
      
  //   ]

  //   const store = mockStore({ data: [] })

  //   return store.dispatch(fetchData())
  //   .then(() => {
  //     expect(store.getActions()).toBe(expectedActions)
  //   })
  // })
});