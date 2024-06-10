import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPlan } from '../../models/plan';
import { Observable } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PlanService {
  apiurl = `${base_url}/plan`;

  constructor(private http: HttpClient) {}

  getAllPlans() {
    return this.http.get<IPlan[]>(this.apiurl);
  }

  getPlan(id: number): Observable<IPlan> {
    return this.http.get<IPlan>(`${this.apiurl}/${id}`);
  }

  createPlan(plan: IPlan) {
    return this.http.post(this.apiurl, plan);
  }

  updatePlan(IPlan: IPlan) {
    return this.http.put(this.apiurl, IPlan);
  }

  deletePlan(id: number): Observable<IPlan[]> {
    return this.http.delete<IPlan[]>(`${this.apiurl}/${id}`);
  }
}
