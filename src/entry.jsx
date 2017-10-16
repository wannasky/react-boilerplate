import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configStore from 'store';
import App from 'app';

let store = configStore();

const render = Component => {
    ReactDom.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root')
    )
}

render(App);