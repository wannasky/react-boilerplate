export const SET_HEADER = 'SET_HEADER';
export const SET_HEADER_TITLE = 'SET_HEADER_TITLE';

//设置头部参数
export function setHeader(object) {
    return {
        type: SET_HEADER,
        header: object
    }
}

//设置头部标题
export function setTitle(title) {
    return {
        type: SET_HEADER_TITLE,
        title: title
    }
}