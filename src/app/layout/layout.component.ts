import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';

// product.model.ts
export interface Product {
  productId: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  createDate: string;
  categoryId: number;
}

export interface ProductResponse {
  $id: string;
  $values: Product[];
}



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'] 
})
export class LayoutComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductserviceService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (response: ProductResponse) => {
        console.log('API yanıtı:', response); // Yanıtı kontrol edin
        this.products = response.$values || []; // $values dizisini kullanın
      },
      (error) => {
        console.error('Veri çekme hatası:', error);
      }
    );
  }


}
