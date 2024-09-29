import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerserviceService } from '../customerservice.service';


//model
export interface Customer{
  customerId:number;
  createDate:string;
  firstName:string;
  lastName:string;
  phoneNumber:string;
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
  customers:Customer[] = [];

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

  deleteCustomer(customerId: number): void {
    if (confirm("Bu kategoriyi silmek istediğinize emin misiniz?")) {
      this.customerService.deleteCustomer(customerId).subscribe(
        () => {
          console.log('Kullanıcı silindi:', customerId);
          // Kategoriyi silindikten sonra listeden çıkarmak için güncelle
          this.fetchCustomers();
        },
        (error) => {
          console.error('Silme hatası:', error);
        }
      );
    }
  }

}
