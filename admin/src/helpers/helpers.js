import {createBrowserHistory} from 'history';
import {authenticationService} from '../services/authentication';

/**
 * 
 */
const history = createBrowserHistory();

/**
 * 
 * @returns 
 */
function authHeader(){
    const currentUser = authenticationService.currentUserValue;
    if(currentUser && currentUser.token){
        return {Authorization: `Bearer ${currentUser.token}`};
    }else{
        return {};
    }
} 

/**
 * This function checks responses from the api to see if the request was unauthorised, forbidden or succesful
 * @param {*} response 
 * @returns 
 */
function handleResponse(response){
    return response.text()
    .then(text => {
        //console.log(text)
        const data = text && JSON.parse(text);
        if(!response.ok){
            if([401,403].indexOf(response.status) !== -1){
                authenticationService.logout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}



export {
    authHeader,
    handleResponse,
    history,
}