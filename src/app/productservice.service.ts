import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from './layout/layout.component';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private apiUrl = 'https://localhost:7261/api/Product'; // API URL'inizi buraya ekleyin

  constructor(private http: HttpClient) { }

  // getProducts metodunu burada tanımlıyoruz
  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiUrl);
  }
}
