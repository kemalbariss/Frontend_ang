import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.scss'
})
export class UpdateproductComponent implements OnInit {

  product:any={name:'', description:'', quantity:'',price:'',image:'',categoryId:''};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductserviceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // URL’den ID’yi al
    this.loadProduct(id); // Kategoriyi yükle
  }

  loadProduct(id: string | null): void {
    if (id) {
      this.productService.getProductById(id).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          console.error('Hata: Ürün yüklenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz ürün ID');
      this.router.navigate(['/product']); // Geçersiz ID ile yönlendirme
    }
  }

  updateProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.updateProduct(+id, this.product).subscribe( // `+` operatörü ile string'i number'a çevirin
        () => {
          this.router.navigate(['/product']); // Güncelleme tamamlandığında kategoriler sayfasına dön
        },
        (error) => {
          console.error('Hata: Ürün güncellenemedi', error);
        }
      );
    } else {
      console.error('Geçersiz Ürün ID');
      this.router.navigate(['/product']); // Geçersiz ID ile yönlendirme
    }
  }

  cancel(): void {
    this.router.navigate(['/product']); // İptal butonuna tıklanınca kategoriler sayfasına dön
  }
}
