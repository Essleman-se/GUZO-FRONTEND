import axios from 'axios';


export const getAuthToken = () => {  
    //console.log(window.localStorage.getItem('auth_token'));
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    // console.log("Token Result-->");
    // console.log(token);
     window.localStorage.clear();
     window.localStorage.setItem('auth_token', token);
};

axios.defaults.baseURL = 'http://localhost:7071';
//axios.defaults.baseURL = 'http://18.118.152.251:7071';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function request(method, url, data){

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {        
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,       
        url: url,
        headers: headers,
        data: data
    });
};