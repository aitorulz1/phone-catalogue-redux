import React from 'react';
import { shallow } from 'enzyme';
import PhonesList from './PhonesList';
import { enzymeSetUp, testStore } from '../Utils';
import PropTypes from 'prop-types'; 
import checkPropTypes from 'check-prop-types';

enzymeSetUp()

const setUp = (props = {}) => {
  const store = testStore(props)
  const wrapper = shallow(<PhonesList store={store} />).childAt(0).dive()
  return wrapper
}

describe('<PhonesList />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
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

    wrapper = setUp(props)
  })
  
  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {      
      let propsError = checkPropTypes(
        PhonesList.WrappedComponent.propTypes, wrapper, 'props', PhonesList.name
      )
      expect(propsError).toBeUndefined()
    })
  })

  describe('Phonelist Component renders', () => {
    
    test('Renders without errors', () => {
      const component = wrapper.find('.PhoneList')
      expect(component.length).toBe(1)
    })

    test('Should receive props', () => {
      const component = wrapper.find('Card')
      expect(component.props()).toBeTruthy()
    })

    test('Should render Card component', () => {
      const component = wrapper.find('Card')
      expect(component.length).toBe(1)
    })
    
  })
});