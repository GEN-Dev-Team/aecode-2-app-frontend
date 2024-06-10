import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ITag } from '../../models/tags';
import { Observable } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class TagsService {
  apiurl = `${base_url}/tag`;

  constructor(private http: HttpClient) {}

  getAllTags() {
    return this.http.get<ITag[]>(this.apiurl);
  }

  getTag(id: number): Observable<ITag> {
    return this.http.get<ITag>(`${this.apiurl}/${id}`);
  }

  createTag(tag: ITag) {
    return this.http.post(this.apiurl, tag);
  }

  updateTag(tag: ITag) {
    return this.http.put(this.apiurl, tag);
  }

  deleteTag(id: number): Observable<ITag[]> {
    return this.http.delete<ITag[]>(`${this.apiurl}/${id}`);
  }
}
