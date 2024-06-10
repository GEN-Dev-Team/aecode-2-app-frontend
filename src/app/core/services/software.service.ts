import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISoftware } from '../../models/software';
import { Observable } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class SoftwareService {
  apiurl = `${base_url}/software`;

  constructor(private http: HttpClient) {}

  getAllSoftwares() {
    return this.http.get<ISoftware[]>(this.apiurl);
  }

  getSoftware(id: number): Observable<ISoftware> {
    return this.http.get<ISoftware>(`${this.apiurl}/${id}`);
  }

  createSoftware(software_img: File, software: string) {
    const data = new FormData();
    data.append('filesoft', software_img);
    data.append('data', JSON.stringify(software));

    return this.http.post(this.apiurl, data);
  }

  updateSoftware(software: ISoftware) {
    return this.http.put(this.apiurl, software);
  }

  deleteSoftware(id: number): Observable<ISoftware[]> {
    return this.http.delete<ISoftware[]>(`${this.apiurl}/${id}`);
  }
}
