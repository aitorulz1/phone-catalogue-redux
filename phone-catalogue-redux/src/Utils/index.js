import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../redux/reducers';
import { middleware } from '../redux/store';


export const enzymeSetUp = () => {
  configure({ adapter: new Adapter() });
}

export const testStore = (initialState) => {
  const createStoreMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreMiddleware(RootReducer, initialState)
}