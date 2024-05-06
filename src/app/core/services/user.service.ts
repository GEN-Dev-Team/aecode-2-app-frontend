import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  apiurl = 'https://aecode.onrender.com/profile';
  // Local storage requests test
  localUrl = 'http://localhost:3000/userList';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.localUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.localUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.localUrl}`, user);
  }

  updateUser(id: number, user: User) {
    return this.http.put<User>(`${this.localUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(`${this.localUrl}/${id}`);
  }
}
