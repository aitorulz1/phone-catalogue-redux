import React from 'react';
import App from './App';
import { testStore, enzymeSetUp } from './Utils'
import { shallow } from 'enzyme';
import { initialState } from './redux/reducers';

enzymeSetUp()

const setUp = (initialState = {}) => {
  const store = testStore(initialState)
  const wrapper = shallow(<App store={store}/>).childAt(0).dive();
  //console.log(wrapper.debug())
  return wrapper
}

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
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

    wrapper = setUp(initialState)
  })

  describe('Have props', () => {
    test('Renders without errors', () => {
      const component = wrapper.find('.App')
      expect(component.length).toBe(1)
    })

    test('Should have a MainNav component', () => {
      const component = wrapper.find('MainNav')
      expect(component.length).toBe(1)
    })

    test('Should have a BrowserRouter', () => {
      const component = wrapper.find('BrowserRouter')
      expect(component.length).toBe(1)
    })

    test('Should have a Switch', () => {
      const component = wrapper.find('Switch')
      expect(component.length).toBe(1)
    })

    test('Should have a Route width path /phones', () => {
      const component = wrapper.find('Route')
      expect(component.prop('path')).toBe('/phones')
    })

    test('Should have a MainFooter component', () => {
      const component = wrapper.find('MainFooter')
      expect(component.length).toBe(1)
    })
  })
});


