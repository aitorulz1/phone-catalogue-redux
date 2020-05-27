import React from 'react';
import { shallow } from 'enzyme';
import MainFooter from './MainFooter';

describe('<MainNav />', () => {
  const component = shallow(<MainFooter/>)
  const wrapper = component.find('footer')

  test('Should be unique footer tag', () => {
    expect(wrapper.length).toBe(1)
  })
  
  test('Should have class bg-dark', () => {
    expect(wrapper.hasClass('bg-dark')).toBeTruthy()
  })

  test('Should contain the name of the autor', () => {
    const wrapper = component.find('h5')
    expect(wrapper.text()).toBe('Realizado por Elizabeth Lombardi')
  })

});