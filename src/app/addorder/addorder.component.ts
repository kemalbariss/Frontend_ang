import { Component} from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from '../order/order.component';
import { Router } from '@angular/router';

export interface Order{
  orderId:number,
  customerId:number,
  productId:number,
  status:boolean,
  address:string,
  description:string,
  createDate:string,
}

@Component({
  selector: 'app-addorder',
  standalone: true,
  imports: [CommonModule,FormsModule,OrderComponent],
  templateUrl: './addorder.component.html',
  styleUrl: './addorder.component.scss'
})
export class AddorderComponent {

    newOrder: Order = {orderId:0,customerId:0,productId:0,status:false,address:'',description:'',createDate:''};

    constructor(private orderService:OrderserviceService,private router:Router){}
 
   

    addOrder(): void {

      console.log('Gönderilen sipariş:', this.newOrder); // hata kontrolü için
      this.orderService.addOrder(this.newOrder).subscribe(
        (response) => {
          console.log('Sipariş başarıyla eklendi:', response);
          this.router.navigate(['/order']);
        },
        (error) => {
          console.error('Sipariş ekleme hatası:', error);
          this.router.navigate(['/order']);
        }
      );
    }
}
