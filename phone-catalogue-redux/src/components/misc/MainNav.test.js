import React from 'react';
import { shallow } from 'enzyme';
import MainNav from './MainNav';
import { enzymeSetUp } from '../../Utils';

enzymeSetUp()

describe('<MainNav />', () => {
  const wrapper = shallow(<MainNav/>)

  test('Should be unique nav tag', () => {
    const nav = wrapper.find('nav')
    expect(nav.length).toBe(1)
  })

  test('Should have class navbar and navbar-dark', () => {
    expect(wrapper.hasClass('navbar navbar-dark')).toBeTruthy()
  }) 

  test('Should contain the name of the store', () => {
    expect(wrapper.text()).toBe('Phone Catalogue')
  })

});

//console.log(wrapper.debug())