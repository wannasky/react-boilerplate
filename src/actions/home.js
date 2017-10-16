import {fetch} from 'utils/fetch';

export const WAIT_INFO = 'WAIT_INFO';

//获取自愿信息
export function getWaitInfo(keyword) {
    keyword = keyword || '';
    return dispatch => {
        return fetch.get('wait/info?keyword='+keyword)
            .then((json) => {
                dispatch({
                    type: WAIT_INFO,
                    list: {list:json}
                });
            });
    }
}
