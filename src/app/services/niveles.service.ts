// niveles.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  private apiUrl = 'http://localhost:9000/api/nivel';

  constructor(private http: HttpClient) {}

  getNivelesByEmpresaId(empresaId: string): Observable<any[]> {
    const url = `${this.apiUrl}?empresaId=${empresaId}`;
    return this.http.get<any[]>(url);
  }
}
