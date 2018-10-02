import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let rootReducer = combineReducers({
    cameras: reducers
})

let middleware = [thunk, logger];
export default () => createStore(rootReducer, applyMiddleware(...middleware))