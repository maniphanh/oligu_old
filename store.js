import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers
import {loginReducer} from './pages/clients/login/reducer';

const configureStore = (preloadState) => {
  // Root reducer
  const rootReducer = combineReducers({login: loginReducer});

  // For middleware
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  // For enhancers
  const enhancers = [middlewareEnhancer];

  // Add dev tool
  const composedEnhancers = composeWithDevTools(...enhancers);

  return createStore(rootReducer, preloadState, composedEnhancers);
};

export default configureStore;
