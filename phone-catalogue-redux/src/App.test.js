import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
configure({ adapter: new Adapter() });
 
  // const middlewares = [thunk];
  // const mockStore = configureStore(middlewares);


  const props = {
    pending: false,
    data: [],
    error: null
  }
  const wrapper = shallow(<Provider><App {...props}></App></Provider>)
  


   console.log(wrapper.debug())

describe('<App />', () => {
  test('Renders without crashing', () => {

  })

  describe('Have props', () => {
    const initialState = {
      pending: false,
      data: [
        {
          color: "white",
          description: "Great phone with an excellent interface. One of the best mid price range phones in the market.",
          id: 3,
          imageFileName: "P10_Lite.jpg",
          manufacturer: "Huawei",
          name: "P10 Lite",
          price: 249,
          processor: "Kirin 658",
          ram: 4,
          screen: "5,2 inch Full-HD",
        }
      ],
      error: null
    }
  })

  describe('Have NO props', () => {

  })


  // test('Should receive s state', () => {
  //   expect(wrapper.props().store.getState()).toBeTruthy()
  // })
});


