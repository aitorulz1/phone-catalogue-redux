import moxios from 'moxios';
import { testStore } from './../../Utils'
import { fetchData, types } from '.';
import mockAxios from 'axios';

describe('Async fecth actions', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  test('Store is updated correctly', () => {
    const expectedState = [
      {
        color: "white",
        description: "Some description",
        id: 3
      },
      {
        color: "white",
        description: "Some description",
        id: 3
      }
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })

    const newState = () => async () => {
      store.dispatch(fetchData())
      const response = await store.getState()
      expect(response.data).toBe(expectedState)
    }
  })
});