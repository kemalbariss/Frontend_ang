import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //verileri yönetmek ve gözlemlemek içindir observe=gözlemlemek...
import { CategoryResponse } from './category/category.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private apiUrl = 'https://localhost:7261/api/Category'; //Kategori için kullanacağımız api url sini tanımladım.

  constructor(private http: HttpClient) { }

  getCategories():Observable<CategoryResponse>{  //apinin get metodundan yardım alarak verileri returnle çektik

    return this.http.get<CategoryResponse>(this.apiUrl);
  }
}
