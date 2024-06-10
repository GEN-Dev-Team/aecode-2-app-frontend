import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPLanguage } from '../../models/programmingLanguage';
import { Observable } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ProgrammingLanguageService {
  apiurl = `${base_url}/proglang`;

  constructor(private http: HttpClient) {}

  getAllProgLangs() {
    return this.http.get<IPLanguage[]>(this.apiurl);
  }

  getProgLang(id: number): Observable<IPLanguage> {
    return this.http.get<IPLanguage>(`${this.apiurl}/${id}`);
  }

  createProgLang(proglang_img: File, proglang: string) {
    const data = new FormData();
    data.append('file', proglang_img);
    data.append('data', JSON.stringify(proglang));

    return this.http.post(this.apiurl, data);
  }

  updateProgLang(progLang: IPLanguage) {
    return this.http.put(this.apiurl, progLang);
  }

  deleteProgLang(id: number): Observable<IPLanguage[]> {
    return this.http.delete<IPLanguage[]>(`${this.apiurl}/${id}`);
  }
}
