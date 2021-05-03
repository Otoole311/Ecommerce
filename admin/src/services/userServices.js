import config from  '../config/config.json';
import {authHeader,handleResponse} from '../helpers/helpers';

const API_URL = config.API.URL_LOCAL;

async function documentUpload(formdata){
    const requestOptions = {method: 'POST', headers: authHeader(), body: formdata};
    const response = await fetch(`${API_URL}`,requestOptions);
    return handleResponse(response);
}

export const userService = {
    documentUpload,
}