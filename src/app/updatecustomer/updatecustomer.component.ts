import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatecustomer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updatecustomer.component.html',
  styleUrl: './updatecustomer.component.scss'
})
export class UpdatecustomerComponent implements OnInit{

  customer: any ={createDate:'',firsName:'',lastName:'',phoneNumber:'',email:''}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService:CustomerserviceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // URL’den ID’yi al
    this.loadCustomer(id); // Kategoriyi yükle
  }

  loadCustomer(id: string | null): void {
    if (id) {
      this.customerService.getCustomerById(id).subscribe(
        (data) => {
          this.customer = data;
        },
        (error) => {
          console.error('Hata: Kullanıcı yüklenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz kullanıcı ID');
      this.router.navigate(['/customer']); // Geçersiz ID ile yönlendirme
    }
  }

  updateCustomer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerService.updateCustomer(+id, this.customer).subscribe( // `+` operatörü ile string'i number'a çevirin
        () => {
          this.router.navigate(['/customer']); // Güncelleme tamamlandığında kategoriler sayfasına dön
        },
        (error) => {
          console.error('Hata: Kullanıcı güncellenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz kullancı ID');
      this.router.navigate(['/customer']); // Geçersiz ID ile yönlendirme
    }
  }

  cancel(): void {
    this.router.navigate(['/customer']); // İptal butonuna tıklanınca kategoriler sayfasına dön
  }
}
