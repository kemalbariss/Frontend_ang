import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from './layout/layout.component';

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

  addCategory(product: Product): Observable<Product> {

    return this.http.post<Product>(this.apiUrl, product);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
