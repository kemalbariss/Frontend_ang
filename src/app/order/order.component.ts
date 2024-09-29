import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderserviceService } from '../orderservice.service';


export interface Order{
 
  customerId:number|null;
  productId:number|null;
  status:boolean|null;
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

  orders:Order[] = [];
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

  deleteOrder(orderId: number): void {
    if (confirm("Bu siparişi silmek istediğinize emin misiniz?")) {
      this.orderService.deleteOrder(orderId).subscribe(
        () => {
          console.log('Sipariş silindi:', orderId);
          this.fetchOrders(); // Siparişler listesini güncelle
        },
        (error) => {
          console.error('Silme hatası:', error);
        }
      );
    }
  }
}
