import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './Loading';

configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  test('Should render an image', () => {
    const component = shallow(<Loading/>)
    const wrapper = component.find('img')
    expect(wrapper.type()).toBe('img')
  })
});