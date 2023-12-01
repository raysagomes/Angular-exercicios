import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getDados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/aluno`);
  }
}
