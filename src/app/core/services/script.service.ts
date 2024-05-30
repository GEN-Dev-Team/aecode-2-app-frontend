import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IScriptDemo } from '../../models/script';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  apiurl = 'https://aecode.onrender.com/prueba';
  // Local storage requests test

  private backurl = `${base_url}/scripts`;

  constructor(private http: HttpClient) {}

  getAllScripts() {
    return this.http.get<IScriptDemo[]>(`${this.apiurl}/imagenes`);
  }

  getScript(id: number): Observable<IScriptDemo> {
    return this.http.get<IScriptDemo>(`${this.apiurl}/${id}`);
  }

  createScript(scriptData: any, scripFile: File) {
    const formData = new FormData();
    formData.append('file', scripFile);
    formData.append('data', JSON.stringify(scriptData));

    return this.http.post<any>(this.apiurl, formData);
  }

  updateScript(script: IScriptDemo) {
    return this.http.put(this.apiurl, script);
  }

  deleteScript(id: number): Observable<IScriptDemo[]> {
    return this.http.delete<IScriptDemo[]>(`${this.apiurl}/${id}`);
  }
}
