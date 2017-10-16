import {WAIT_INFO} from 'actions/home';

//默认
const initState = {
    list: []
}

export default function (state = initState, action) {
    switch (action.type){
        case WAIT_INFO:
            return {...state, ...action.list}
        default:
            return state;
    }
}