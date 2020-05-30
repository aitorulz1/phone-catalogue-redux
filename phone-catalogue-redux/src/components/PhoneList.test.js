import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhonesList from './PhonesList';

configure({ adapter: new Adapter() });
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

function setUp(){
  let wrapper, store;

  const initialState = {
    pending: false,
    data: [
      // {
      //   modalId: 0,
      //   imageFileName: "P10_Lite.jpg",
      //   name: "P10 Lite",
      //   description: 'This is very shirt description',
      //   color: "white",
      //   processor: "Kirin 658",
      //   ram: 4
      // }
    ],
    error: null
  }

  store = mockStore(initialState)
  wrapper = shallow(<PhonesList store={store} />).dive()
  return { wrapper }
}

describe('<PhoneList />', () => {
  const { wrapper } = setUp()
 console.log(wrapper.debug())

  test('Should render self', () => {
    expect(wrapper.find('alert')).toBeTruthy()
  })

  test('Should render an alert if empty or error', () => {
    expect(wrapper.find('alert')).toBeTruthy()
  })

  test('Should render a list', () => {

  })

  // test('Should render a car component', () => {
  //   const CardComponent = wrapper.find(Card).at(0)
  //   expect(CardComponent).to.equals(1)
  // })
});