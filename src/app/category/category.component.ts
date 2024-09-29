import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../categoryservice.service';
import { Router } from '@angular/router';


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

  categories: Category[] = []; //kategoriler dizisi

  selectedCategory: Category | null = null;

  constructor(private categoryService:CategoryserviceService,private router:Router){} 

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


  deleteCategory(categoryId: number): void {
    if (confirm("Bu kategoriyi silmek istediğinize emin misiniz?")) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        () => {
          console.log('Kategori silindi:', categoryId);
          // Kategoriyi silindikten sonra listeden çıkarmak için güncelle
          this.fetchCategories();
        },
        (error) => {
          console.error('Silme hatası:', error);
        }
      );
    }
  }
 
 navigateToUpdate(categoryId:number){
  this.router.navigate(['/updatecategory',categoryId])
 }
}
