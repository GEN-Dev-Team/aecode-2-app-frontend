import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LogIn } from '../../models/login';
import { Observable } from 'rxjs';
import { User } from '@auth0/auth0-angular';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiurl = 'https://aecode.onrender.com/profile/login';

  constructor(private http: HttpClient) {}

  logUser(logIn: LogIn): Observable<User> {
    return this.http.post<User>(this.apiurl, logIn);
  }
}
