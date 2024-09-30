  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Order, OrderResponse } from './order/order.component';

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


    addOrder(order : Order):Observable<Order>{
      return this.http.post<Order>(this.apiUrl,order);
    }

    deleteOrder(orderId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${orderId}`);
    }

    updateOrder(orderId: number, order: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${orderId}`, order);
    }
    
    getOrderById(orderId: string | null): Observable<Order> {
      return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
    }
  }
