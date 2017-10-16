import ifetch from 'isomorphic-fetch';

export const fetch = {

    get (url) {
        return ifetch(url,{method: 'get'})
            .then(response => {
                return response.json();
            });
    },

    post (url, data) {
        return ifetch(url,{
            method: 'post',
            body: JSON.stringify(data)
        }).then(response => {
            return response.json();
        })
    }

}