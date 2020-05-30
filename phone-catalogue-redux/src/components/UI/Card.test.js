import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from './Card'

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper;
  
  beforeEach(() => {
    const props = {
      color: "white",
      description: 'This is very shirt description',
      id: 0,
      imageFileName: "P10_Lite.jpg",
      name: "Name",
      manufacturer: "Huawei",
      price: 249,
      processor: "Kirin 658",
      ram: 4,
      screen: "5,2 inch Full-HD"
    }

    wrapper = shallow(<Card {...props}/>)
    //console.log(wrapper.debug())
  })

  test('Should have the class card', () => {
    expect(wrapper.find('.card').length).toBe(1)
  })

  test('Should receive props', () => {
    expect(wrapper.prop('children')[1].props).toBeTruthy()
  })

  test('Should have an image', () => {
    expect(wrapper.find('img').length).toBe(1)
  })

  test('Should have a title width a h5 tag and have text', () => {
    const element = wrapper.find('h5')
    expect(element.find('.card-title').length).toBe(1)
    expect(element.text()).toBeTruthy()
  })

  test('Should receive a price and type number', () => {
    const element = wrapper.find('.price').props()
    expect(typeof element.children[0]).toBe('number')
  })

  test('Should be typeof button and data-toggle modal', () => {
    const button = wrapper.find('button')
    expect(button.type()).toBe('button')
    expect(button.prop('data-toggle')).toBe('modal')
    expect(button.prop('data-target')).toBeTruthy()
  })

  test('Should have one PhoneDetail component', () => {
    expect(wrapper.find('PhoneDetail').length).toBe(1)
  })

});