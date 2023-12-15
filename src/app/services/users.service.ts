import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private baseUrl:string;
  
  constructor() { 
    this.baseUrl = "http://52.0.224.33:9000/api"
  }
  register(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/registerAdmin`,formValue)
      )
      
  }
  login(formValue:any){ 
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/loginAdmin`,formValue)
    )
  }
}
