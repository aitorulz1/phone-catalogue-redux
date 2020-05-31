import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';

export const middleware = [thunk]

const loggerMiddleware = createLogger()

export const createStoreMiddleware = applyMiddleware(...middleware, loggerMiddleware)(createStore)

export const store = createStoreMiddleware(RootReducer)