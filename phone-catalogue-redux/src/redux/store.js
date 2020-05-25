import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from './reducers';
import { fetchData } from './actions';


const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, loggerMiddleware)
  )
)
store.dispatch(fetchData())
export default store;