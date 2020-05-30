import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainNav from './MainNav';

configure({ adapter: new Adapter() });

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