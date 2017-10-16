import {DETAIL_INFO,DB_INFO, DB_MODAL} from 'actions/detail';

//默认
const initState = {
    list: {},
    db:[],
    etkt:'',
    modal: false
}

export default function (state = initState, action) {
    switch (action.type){
        case DETAIL_INFO:
            return {...state, ...action.list}
        case DB_INFO:
            return {...state, ...action.db}
        case DB_MODAL:
            return {
                ...state,
                etkt: action.etkt,
                modal: action.modal
            }
        default:
            return state;
    }
}
