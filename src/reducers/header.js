import {SET_HEADER, SET_HEADER_TITLE} from 'actions/header';

//默认
const initState = {
    title: '',
    nav: false,
    date: false
}

export default function (state = initState, action) {
    switch (action.type){
        case SET_HEADER:
            return {...state, ...action.header}
        case SET_HEADER_TITLE:
            return {...state, title:action.title}
        default:
            return state;
    }
}