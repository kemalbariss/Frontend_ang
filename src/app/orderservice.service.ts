import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderResponse } from './order/order.component';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  private apiUrl='https://localhost:7261/api/Order'

  constructor(private http:HttpClient) { }

  //metod
  getOrders():Observable<OrderResponse>{

    return this.http.get<OrderResponse>(this.apiUrl);
  }
}
