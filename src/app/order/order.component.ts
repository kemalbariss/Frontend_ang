import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderserviceService } from '../orderservice.service';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer.component';


export interface Order{
 
  customerId:number|null;
  productId:number|null;
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
  imports: [CommonModule,],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{

  orders:Order[] = [];

  selectedCustomer: Customer | null = null;

  constructor(private orderService:OrderserviceService, private router:Router){}

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

  navigateToUpdate(orderId:number){
    this.router.navigate(['/updateorder',orderId])
   }
}
