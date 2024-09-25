import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private apiUrl = 'https://localhost:7261/api/Product'; // API URL'inizi buraya ekleyin

  constructor(private http: HttpClient) { }

  // getProducts metodunu burada tanımlıyoruz
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
