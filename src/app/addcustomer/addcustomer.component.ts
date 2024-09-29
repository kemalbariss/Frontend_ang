import { Component } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Customer{
  customerId:number,
  createDate:string,
  firstName:string,
  lastName:string,
  phoneNumber:string,
  email:string,
}

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.scss'
})
export class AddcustomerComponent {

  newCustomer: Customer = {customerId:0,createDate:'',firstName:'',lastName:'',phoneNumber:'',email:''};

  constructor(private customerService: CustomerserviceService){}

  addCustomer():void{
    console.log('Gönderilen kategori:', this.newCustomer); // Hata kontrolü için
    this.customerService.addCustomer(this.newCustomer).subscribe(
      (response) => {
        console.log('Kullanıcı başarıyla eklendi.',response);
      },
      (error)=>{
        console.log('Kullanıcı ekleme hatası.',error);
      }
    );
  }
}
