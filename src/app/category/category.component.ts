import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../categoryservice.service';



export interface Category{
  categoryId: number;
  name:string;
  description:string;
  createDate:string;

}

export interface CategoryResponse{  
  $id: string;
  $values: Category[];
}
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  categories: any[] = []; //kategoriler dizisi

  constructor(private categoryService:CategoryserviceService){} 

  ngOnInit(): void {  
    this.fetchCategories();
  }   



  fetchCategories():void{ 
    this.categoryService.getCategories().subscribe(
      (response:CategoryResponse)=>{
        console.log('Api Yanıtı:',response);
        this.categories = response.$values || [];  //gelen değerleri diziye atıyoruz eğer değer yoksa boş ata
      },                                         
      (error)=>{ 
        console.error('Veri çekme hatası:',error)
      }
    );
  }

}
