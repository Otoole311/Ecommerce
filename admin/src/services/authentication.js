import config from '../config/config.json';
import {BehaviorSubject} from 'rxjs';
import {handleResponse} from '../helpers/helpers';
const API_URL = config.API.URL_LOCAL;

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

/**
 * function to log in user
 * @param {String} email - user's email
 * @param {String} password - user's password
 * @returns - success message
 */
function login(email,password){
    const requestOptions = {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch(`${API_URL}/admin/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user =>{
        localStorage.setItem('currentUser',JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
    })
}

/**
 * this function logs the user out
 */
async function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);

    const response = await fetch(`${API_URL}/admin/auth/logout`);
    return handleResponse(response);
}

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};