import React from 'react';
import { enzymeSetUp } from '../../Utils';
import { shallow } from 'enzyme';
import Loading from './Loading';

enzymeSetUp()

describe('<Loading />', () => {
  test('Should render an image', () => {
    const component = shallow(<Loading/>)
    const wrapper = component.find('img')
    expect(wrapper.type()).toBe('img')
  })
});