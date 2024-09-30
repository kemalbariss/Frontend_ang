import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';


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
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductserviceService,private router:Router) { }

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

  deleteProduct(productId: number): void {
    if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          console.log('Ürün silindi:', productId);
          
          this.fetchProducts();
        },
        (error) => {
          console.error('Silme hatası:', error);
        }
      );
    }
  }

  navigateToUpdate(productId:number){
    this.router.navigate(['/updateproduct',productId])
   }

}
