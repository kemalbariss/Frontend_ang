  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs'; //verileri yönetmek ve gözlemlemek içindir observe=gözlemlemek...
  import { CategoryResponse } from './category/category.component';
  import { Category } from './addcategory/addcategory.component';

  @Injectable({
    providedIn: 'root'
  })
  export class CategoryserviceService {

    private apiUrl = 'https://localhost:7261/api/Category'; //Kategori için kullanacağımız api url sini tanımladım.

    constructor(private http: HttpClient) { }

    getCategories():Observable<CategoryResponse>{ //apinin get metodundan yardım alarak verileri returnle çektik

      return this.http.get<CategoryResponse>(this.apiUrl);
    }

    addCategory(category: Category): Observable<Category> {

      return this.http.post<Category>(this.apiUrl, category);
    }

    deleteCategory(categoryId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${categoryId}`);
    }

    updateCategory(categoryId: number, category: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${categoryId}`, category);
    }
    
    getCategoryById(categoryId: string | null): Observable<Category> {
      return this.http.get<Category>(`${this.apiUrl}/${categoryId}`);
    }
    
  }
