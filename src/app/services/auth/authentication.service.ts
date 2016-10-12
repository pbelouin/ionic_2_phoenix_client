import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email, password) {
        return this.http.post('http://localhost:4000/sessions', {session: { email: email, password: password }})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    register(email, password) {
        return this.http.post('http://localhost:4000/registrations', {user: { email: email, password: password }})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let responseData = response.json();
                console.log(responseData);
                if (responseData && responseData.jwt) {
                    console.log(responseData);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(responseData));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}