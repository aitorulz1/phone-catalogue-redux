import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PhoneDetail from './PhoneDetail';

configure({ adapter: new Adapter() });

describe('<PhoneDetail/>', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      modalId: 0,
      imageFileName: "P10_Lite.jpg",
      name: "P10 Lite",
      description: 'This is very shirt description',
      color: "white",
      processor: "Kirin 658",
      ram: 4
    }
    
    wrapper = shallow(<PhoneDetail {...props}/>)
    //console.log(wrapper.props())
  })

  test('Should have the class modal and should be unique', () => {
    expect(wrapper.find('.modal').length).toBe(1)
  })

  test('Should receive an id an be an number', () => {
    const element = wrapper.find('.modal').props()
    expect(typeof element.id).toBe('number')
  })

  test('Should have a title width a h5 tag and have text', () => {
    const element = wrapper.find('h5')
    expect(element.hasClass('modal-title')).toBeTruthy()
    expect(element.text()).toBeTruthy()
    expect(element.type()).toBe('h5')
  })

  test('Should have an image', () => {
    expect(wrapper.find('img').length).toBe(1)
  })
})