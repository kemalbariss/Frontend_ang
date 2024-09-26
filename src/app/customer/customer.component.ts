import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerserviceService } from '../customerservice.service';


//model
export interface Customer{
  customerId:number;
  createDate:string;
  firstName:string;
  lastName:string;
  phoneNumber:number;
  email:string;
}
export interface CustomerResponse{
  $id:string;
  $values:Customer[];
}


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit{
  customers:any[] = [];

  constructor(private customerService: CustomerserviceService){}

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers():void{
    
    this.customerService.getCustomers().subscribe(
      (response:CustomerResponse)=>{
        console.log('Api Yanıtı:',response);
        this.customers=response.$values || [];
      },
      (error)=>{
        console.error('Veri Çekme hatası:',error) ;
      }
    );
  }

}
