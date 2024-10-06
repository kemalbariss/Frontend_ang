import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent {
  
  loginData = {
    firstName: '',
    lastName: '',
    email: ''
  }


    constructor(private loginService: LoginserviceService,private router:Router) {}

  onLogin() {
    this.loginService.login(this.loginData).subscribe({
      next: (token) => { //api çağrısı başarılı ise 
        console.log('Login successful', token);
        localStorage.setItem('accessToken', token); // Örnek olarak token'ı kaydedin
        localStorage.setItem('userEmail', this.loginData.email);

        //  // Token'ın süresini ayarlayın
        //  const expirationTime = 60 * 1000; // 1 dakika
        //  setTimeout(() => {
        //    alert('Token süresi doldu, lütfen giriş yapın.');
        //    localStorage.removeItem('accessToken'); // Token'ı silin
        //    localStorage.removeItem('userEmail'); // E-posta adresini silin
        //    this.router.navigate(['/login']); // Login sayfasına yönlendirin
        //  }, expirationTime);

        this.router.navigate(['/layout']); // Layout sayfasına yönlendirin
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Login failed: Kullanıcı bilgilerini kontrol edin.'); // Hata mesajı
      }
    });
}

//Observable, yanıt almak için subscribe olmak gerekir subscribe ise observable üzerinde bir dinleyicidir . Asenkron veriye yanıt verir.
}
