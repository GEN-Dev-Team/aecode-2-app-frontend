import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IScript } from '../../models/script';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  apiurl = `${base_url}/script`;

  constructor(private http: HttpClient) {}

  getAllScripts() {
    return this.http.get<IScript[]>(`${this.apiurl}`);
  }

  getScript(id: number): Observable<IScript> {
    return this.http.get<IScript>(`${this.apiurl}/${id}`);
  }

  createScript(scriptMiniature: File[], scriptFile: File[], scriptData: any) {
    const formData = new FormData();

    // Agregar cada archivo de scriptMiniature al formData
    scriptMiniature.forEach((file, index) => {
      formData.append(`Smultimedia`, file, file.name);
    });

    // Agregar el archivo principal scriptFile al formData
    scriptMiniature.forEach((scriptFile, index) => {
      formData.append(`Sscript`, scriptFile, scriptFile.name);
    });

    // Agregar los datos adicionales scriptData al formData
    formData.append('Sdata', JSON.stringify(scriptData));

    return this.http.post<any>(this.apiurl, formData);
  }

  updateScript(script: IScript) {
    return this.http.put(this.apiurl, script);
  }

  deleteScript(id: number): Observable<IScript[]> {
    return this.http.delete<IScript[]>(`${this.apiurl}/${id}`);
  }
}
