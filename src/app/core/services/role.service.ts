import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../../models/role';
import { environment } from '../../../environments/environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class RoleService {
  apiurl = `${base_url}/roles`;

  constructor(private http: HttpClient) {}

  getAllRoles() {
    return this.http.get<Role[]>(this.apiurl);
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.apiurl}/${id}`);
  }

  createRole(role: Role) {
    return this.http.post(this.apiurl, role);
  }

  updateRole(role: Role) {
    return this.http.put(this.apiurl, role);
  }

  deleteRole(id: number): Observable<Role[]> {
    return this.http.delete<Role[]>(`${this.apiurl}/${id}`);
  }
}
