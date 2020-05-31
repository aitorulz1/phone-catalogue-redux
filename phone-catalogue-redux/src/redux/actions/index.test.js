import moxios from 'moxios';
import { testStore } from './../../Utils'
import { fetchData } from '.';


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
        id: 3,
        imageFileName: "P10_Lite.jpg",
        manufacturer: "Huawei",
        name: "P10 Lite",
        price: 249,
        processor: "Kirin 658",
        ram: 4,
        screen: "5,2 inch Full-HD"
      },
      {
        color: "white",
        description: "Some description",
        id: 3,
        imageFileName: "P10_Lite.jpg",
        manufacturer: "Huawei",
        name: "P10 Lite",
        price: 249,
        processor: "Kirin 658",
        ram: 4,
        screen: "5,2 inch Full-HD"
      }
    ]

    const store = testStore()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedState
        //should fail
        //response: []
      })
    })

    return store.dispatch(fetchData())
    .then(() => {
      const newState = store.getState()
      expect(newState.data).toBe(expectedState)
    })
  })
});