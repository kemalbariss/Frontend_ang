import { Component } from '@angular/core';
import { CategoryserviceService } from '../categoryservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Category {
  categoryId: number;
  name: string;
  description: string;
  createDate: string;
}

@Component({
  selector: 'app-addcategory',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss'] // 'styleUrl' yerine 'styleUrls'
})
export class AddcategoryComponent {
  newCategory: Category = {categoryId:0 , name: '', description: '', createDate: '' }; // categoryId yok

  constructor(private categoryService: CategoryserviceService) {}

  addCategory(): void {

    console.log('Gönderilen kategori:', this.newCategory); // hata kontrolü için
    this.categoryService.addCategory(this.newCategory).subscribe(
      (response) => {
        console.log('Kategori başarıyla eklendi:', response);
     
      },
      (error) => {
        console.error('Kategori ekleme hatası:', error);
      }
    );
  }
}