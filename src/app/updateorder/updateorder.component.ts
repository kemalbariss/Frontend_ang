import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderserviceService } from '../orderservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateorder',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updateorder.component.html',
  styleUrl: './updateorder.component.scss'
})
export class UpdateorderComponent implements OnInit{

  order:any = {orderId:0,customerId:'',productId:'',status:false,address:'',description:'',createDate:''};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService:OrderserviceService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // URL’den ID’yi al
    this.loadOrder(id); // Kategoriyi yükle
  }

  loadOrder(id: string | null): void {
    if (id) {
      this.orderService.getOrderById(id).subscribe(
        (data) => {
          this.order = data;
        },
        (error) => {
          console.error('Hata: Sipariş yüklenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz Sipariş ID');
      this.router.navigate(['/order']); // Geçersiz ID ile yönlendirme
    }
  }

  updateOrder(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.updateOrder(+id, this.order).subscribe( // `+` operatörü ile string'i number'a çevirin
        () => {
          this.router.navigate(['/order']); // Güncelleme tamamlandığında kategoriler sayfasına dön
        },
        (error) => {
          console.error('Hata: Sipariş güncellenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz Sipariş ID');
      this.router.navigate(['/order']); // Geçersiz ID ile yönlendirme
    }
  }

  cancel(): void {
    this.router.navigate(['/order']); // İptal butonuna tıklanınca kategoriler sayfasına dön
  }
}
