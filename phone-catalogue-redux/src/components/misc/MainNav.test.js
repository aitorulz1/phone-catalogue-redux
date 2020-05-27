import React from 'react';
import { shallow } from 'enzyme';
import MainNav from './MainNav';

describe('<MainNav />', () => {
  const component = shallow(<MainNav/>)

  test('Should be unique nav tag', () => {
    const wrapper = component.find('nav')
    expect(wrapper.length).toBe(1)
  })

  test('Should have class navbar and navbar-dark', () => {
    const wrapper = component.find('.navbar')
    expect(wrapper.hasClass('navbar navbar-dark')).toBeTruthy()
  })

  test('Should contain the name of the store', () => {
    const wrapper = component.find('h1')
    expect(wrapper.text()).toBe('Phone Catalogue')
  })

});

//console.log(component.debug())