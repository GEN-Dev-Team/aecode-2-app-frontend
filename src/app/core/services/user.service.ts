import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  apiurl = 'https://aecode.onrender.com/profile';
  // Local storage requests test

  private backurl = `${base_url}/profile`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiurl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiurl}`, user);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.apiurl, user);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.apiurl}/${id}`);
  }
}
