import axios from 'axios';


// TODO add needed () post | put | delete | ...)

export const getFromHttp = async ({ url }) => {

    if (!isValidFileType(file)) {
        alert('Разрешены только файты типа .csv');
        return;
    }

    return axios({
        method: 'get',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        url: url,
    })
        .then((resp) => {
            console.log('response', resp.data)
            return resp.data
        })
        .catch((err) => {
            console.error(err)
            return err['message']
        });
};