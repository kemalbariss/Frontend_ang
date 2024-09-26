import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderserviceService } from '../orderservice.service';


export interface Order{
 
  customerId:number;
  productId:number;
  status:boolean;
  address:string;
  description:string;
  orderId: number;
  createDate: string;


}
export interface OrderResponse{

  $id:string;
  $values: Order[];
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{

  orders:any[] = [];
  constructor(private orderService:OrderserviceService){}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders():void{
        this.orderService.getOrders().subscribe(
          (response:OrderResponse)=>{
            console.log('Api yanıtı:',response);
            this.orders = response.$values || [];
          },
          (error)=>{
            console.error('Veri çekme hatası:',error)
          }
        );
  }
}
