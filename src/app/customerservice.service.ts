import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponse } from './customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private apiUrl = 'https://localhost:7261/api/Customer';

  constructor(private http: HttpClient) { }

  //metod
  getCustomers(): Observable<CustomerResponse>{
    return this.http.get<CustomerResponse>(this.apiUrl);
  }
}
