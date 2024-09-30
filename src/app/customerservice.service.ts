import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerResponse } from './customer/customer.component';

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


  addCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl,customer);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${customerId}`);
  }

  updateCustomer(customerId: number, customer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${customerId}`, customer);
  }
  
  getCustomerById(customerId: string | null): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${customerId}`);
  }
}
