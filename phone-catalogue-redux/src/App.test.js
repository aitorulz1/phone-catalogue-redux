import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<App />', () => {
  let store, wrapper;

  beforeEach(() => {
    const initialState = {
      pending: false,
      data: [],
      error: null
    }
    store = mockStore(initialState)
    wrapper = shallow(<App store={store} />).dive()


    //console.log(wrapper.debug())
    //console.log(element)
    //console.log(render(wrapper))
  })

  test('Should have class App', () => {
    // const component = render(wrapper)
    // expect(component.hasClass('App')).toBeTruthy()
  })


  test('Should call componentDidMount once', () => {

  })
  

  test('Should receive s state', () => {
    expect(wrapper.props().store.getState()).toBeTruthy()
  })
});


