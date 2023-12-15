import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private empresaUrl = "http://52.0.224.33:9000/api/empresa"

  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get<any[]>(this.empresaUrl)
    .pipe(
      map(empresas => this.transformEmpresas(empresas))
    );
    
  }
  getItemById(id: string): Observable<any> {
    const url = `${this.empresaUrl}/${id}`;
    return this.http.get(url);
  }
  createItem(item: any): Observable<any> {
    return this.http.post(this.empresaUrl, item)

  }


  updateItem(id: string, item: any): Observable<any> {
    const url = `${this.empresaUrl}/${id}`;
    return this.http.put(url, item);
  }


  deleteItem(id: string): Observable<any> {
    const url = `${this.empresaUrl}/${id}`;
    return this.http.delete(url);
  }
  
  private transformEmpresas(empresas: any[]): any[] {
    return empresas.map(empresa => {
      const imagenUrl = `http://52.0.224.33:9000/${empresa.imagen}`;
      return {
        ...empresa,
        imagen: imagenUrl
      };
    });
  }






}
