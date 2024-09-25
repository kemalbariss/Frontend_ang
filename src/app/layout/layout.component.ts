import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'] 
})
export class LayoutComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductserviceService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
        (response) => {
            console.log('API yanıtı:', response); // Yanıtı kontrol edin
            this.products = Array.isArray(response) ? response : []; // Eğer dizi değilse boş bir dizi ata
        },
        (error) => {
            console.error('Veri çekme hatası:', error);
        }
    );
}

}
