import React from 'react';
import { shallow } from 'enzyme';
import PhonesList from './PhonesList';
import { enzymeSetUp } from '../Utils';
import PropTypes from 'prop-types'; 
import checkPropTypes from 'check-prop-types';

enzymeSetUp()

describe('<PhonesList />', () => {
  let wrapper;
  
  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        data: [{
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
        }],
        error: 'Some error message',
        pending: false
      }
      
      let propsError = checkPropTypes(
        PhonesList.WrappedComponent.propTypes, expectedProps, 'props', PhonesList.name
      )
      expect(propsError).toBeUndefined()
    })
  })

  describe('Phonelist Component renders', () => {

    beforeEach(() => {
      const props = {
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
      wrapper = shallow(<PhonesList {...props}/>)
    })

    test('Should render self', () => {
      //expect(wrapper.find('alert')).toBeTruthy()
    })
  

  
    test('Should render a list', () => {
  
    })
  
    // test('Should render a car component', () => {
    //   const CardComponent = wrapper.find(Card).at(0)
    //   expect(CardComponent).to.equals(1)
    // })
  })

  describe('Phonelist Component NOT renders', () => {
    wrapper = shallow(<PhonesList {...props}/>)
    test('Should render an alert if empty or error', () => {
      //expect(wrapper.find('alert')).toBeTruthy()
    })
  })

});