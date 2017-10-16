import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const middlewares = [thunkMiddleware, middleware];

//配置store，添加history中间件配置
export default function configStore(initState) {
    return createStore(rootReducer, initState, applyMiddleware(...middlewares));
}