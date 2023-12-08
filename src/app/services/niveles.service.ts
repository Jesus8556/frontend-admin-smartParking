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
    // Crear un nuevo nivel
    createNivel(nivelData: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, nivelData);
    }
  
    // Obtener un nivel por ID
    getNivelById(nivelId: string): Observable<any> {
      const url = `${this.apiUrl}/${nivelId}`;
      return this.http.get<any>(url);
    }
  
    // Actualizar un nivel por ID
    updateNivel(nivelId: string, nivelData: any): Observable<any> {
      const url = `${this.apiUrl}/${nivelId}`;
      return this.http.put<any>(url, nivelData);
    }
  
    // Eliminar un nivel por ID
    deleteNivel(nivelId: string): Observable<any> {
      const url = `${this.apiUrl}/${nivelId}`;
      return this.http.delete<any>(url);
    }
}
