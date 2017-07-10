import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
// import * as types from '../actions/types';

const rootReducer = combineReducers({
    appState: appReducer,
    routing: routing
});

export default rootReducer;
