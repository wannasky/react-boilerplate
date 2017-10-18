import {combineReducers} from 'redux';
import header from 'reducers/header';
import home from 'reducers/home';

const rootReducer = combineReducers({
    header,
    home
});

export default rootReducer;
