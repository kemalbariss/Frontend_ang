import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface Product{
  productId:number,
  categoryId:number,
  name:string,
  description:string,
  quantity:number,
  price:number,
  image:string,
  createDate:string,
}

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  newProduct: Product = {productId:0,categoryId:0,name:'',description:'',quantity:0,price:0,image:'',createDate:''};
  constructor(private productService:ProductserviceService){}

  addProduct(): void {

    console.log('Gönderilen ürün:', this.newProduct); // hata kontrolü için
    this.productService.addCategory(this.newProduct).subscribe(
      (response) => {
        console.log('Ürün başarıyla eklendi:', response);
     
      },
      (error) => {
        console.error('Ürün ekleme hatası:', error);
      }
    );
  }

}
