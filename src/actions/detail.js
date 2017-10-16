import {fetch} from 'utils/fetch';

export const DETAIL_INFO = 'DETAIL_INFO';
export const DB_INFO = 'DB_INFO';
export const DB_MODAL = 'DB_MODAL';

//获取自愿的旅客
export function getUserInfo(id) {
    return dispatch => {
        return fetch.get('wait/user?id='+id)
            .then((json) => {
                dispatch({
                    type: DETAIL_INFO,
                    list: {list:json}
                });
                return json;
            });
    }
}

//获取DB旅客的信息
export function getDbInfo(id) {
    return dispatch => {
        return fetch.get('wait/db?id='+id)
            .then((json) => {
                dispatch({
                    type: DB_INFO,
                    db: {db:json}
                });
                return json;
            });
    }
}

export function showModal(etkt) {
    return {
        type: DB_MODAL,
        etkt: etkt,
        modal: true
    }
}

export function hideModal() {
    return {
        type: DB_MODAL,
        etkt: '',
        modal: false
    }
}