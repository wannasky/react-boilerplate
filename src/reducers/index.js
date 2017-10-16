import {combineReducers} from 'redux';
import header from 'reducers/header';
import home from 'reducers/home';
import detail from 'reducers/detail';

const rootReducer = combineReducers({
    header,
    home,
    detail
});

export default rootReducer;
