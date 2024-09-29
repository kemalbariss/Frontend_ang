import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryserviceService } from '../categoryservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-updatecategory',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updatecategory.component.html',
  styleUrl: './updatecategory.component.scss'
})
export class UpdatecategoryComponent implements OnInit{

  category: any = { name: '', description: '' }; // Kategori nesnesi

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryserviceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // URL’den ID’yi al
    this.loadCategory(id); // Kategoriyi yükle
  }

  loadCategory(id: string | null): void {
    if (id) {
      this.categoryService.getCategoryById(id).subscribe(
        (data) => {
          this.category = data;
        },
        (error) => {
          console.error('Hata: Kategori yüklenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz kategori ID');
      this.router.navigate(['/category']); // Geçersiz ID ile yönlendirme
    }
  }
  
  updateCategory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoryService.updateCategory(+id, this.category).subscribe( // `+` operatörü ile string'i number'a çevirin
        () => {
          this.router.navigate(['/category']); // Güncelleme tamamlandığında kategoriler sayfasına dön
        },
        (error) => {
          console.error('Hata: Kategori güncellenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz kategori ID');
      this.router.navigate(['/category']); // Geçersiz ID ile yönlendirme
    }
  }
  

  cancel(): void {
    this.router.navigate(['/category']); // İptal butonuna tıklanınca kategoriler sayfasına dön
  }
}

