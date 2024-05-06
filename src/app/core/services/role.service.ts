import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../../models/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  apiurl = 'https://aecode.onrender.com/roles';
  // Local storage requests test
  localUrl = 'http://localhost:3000/roles';

  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiurl);
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.apiurl}/${id}`);
  }

  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(`${this.apiurl}`, role);
  }

  updateRole(id: number, role: Role) {
    return this.http.put<Role>(`${this.apiurl}/${id}`, role);
  }

  deleteRole(id: number): Observable<Role[]> {
    return this.http.delete<Role[]>(`${this.apiurl}/${id}`);
  }
}
