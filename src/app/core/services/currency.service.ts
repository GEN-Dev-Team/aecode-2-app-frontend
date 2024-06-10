import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICurrency } from '../../models/currency';
import { Observable } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  apiurl = `${base_url}/currency`;

  constructor(private http: HttpClient) {}

  getAllCurrencies() {
    return this.http.get<ICurrency[]>(this.apiurl);
  }

  getCurrency(id: number): Observable<ICurrency> {
    return this.http.get<ICurrency>(`${this.apiurl}/${id}`);
  }

  createCurrency(currency: ICurrency) {
    return this.http.post(this.apiurl, currency);
  }

  updateCurrency(currency: ICurrency) {
    return this.http.put(this.apiurl, currency);
  }

  deleteCurrency(id: number): Observable<ICurrency[]> {
    return this.http.delete<ICurrency[]>(`${this.apiurl}/${id}`);
  }
}
