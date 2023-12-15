import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private apiUrl = 'http://52.0.224.33:9000/api/parking';

  constructor(private http: HttpClient) {}

  // Obtener lugares por nivelId
  getLugaresByNivelId(nivelId: string): Observable<any[]> {
    const url = `${this.apiUrl}?nivelId=${nivelId}`;
    return this.http.get<any[]>(url);
  }

  // Crear un nuevo lugar
  createLugar(lugarData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, lugarData);
  }

  // Obtener un lugar por ID
  getLugarById(lugarId: string): Observable<any> {
    const url = `${this.apiUrl}/${lugarId}`;
    return this.http.get<any>(url);
  }

  // Actualizar un lugar por ID
  updateLugar(lugarId: string, lugarData: any): Observable<any> {
    const url = `${this.apiUrl}/${lugarId}`;
    return this.http.put<any>(url, lugarData);
  }

  // Eliminar un lugar por ID
  deleteLugar(lugarId: string): Observable<any> {
    const url = `${this.apiUrl}/${lugarId}`;
    return this.http.delete<any>(url);
  }
}
