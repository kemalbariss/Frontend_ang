import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})


export class LoginserviceService {

   private apiUrl='https://localhost:7261/api/Token'

   private token: string | null = localStorage.getItem('accessToken');

   private userEmail : string | null = null;

    constructor(private http:HttpClient){
      this.token = localStorage.getItem('accessToken');
    }

    login(loginData: { firstName: string; lastName: string; email: string }): Observable<any> {
      return this.http.post(this.apiUrl, loginData).pipe( // Observable üzerinden çalışır gelen veriyi seçmek , filtrelemek için kullanılır 
        tap((response: any) => { //işlemi kesmeden başka bir iş yapmak
          this.userEmail = loginData.email;
          localStorage.setItem('accessToken',response.accessToken);
          localStorage.setItem('email',loginData.email);
        })
      );
    }

    // getUserEmail(): string | null {
    //   if (!this.token) return null;
    //   try {
    //     const decoded: any = jwtDecode(this.token);
    //     return decoded().userEmail; // Token'dan e-posta adresini al
    //   } catch (error) {
    //     console.error('Token decode hatası:', error);
    //     return null;
    //   }
    // }

    
    getToken(): string | null {
      return this.token;
    }

    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    }

    logout() {
      this.token = null;
      localStorage.removeItem('token');
    }

  //   isTokenExpired(token: string): boolean {
  //     try {
  //         const decoded: any = jwtDecode(token);
  //         const expirationDate = new Date(decoded.exp * 1000);
  //         return expirationDate < new Date();
  //     } catch (error) {
  //         console.error('Token decode hatası:', error);
  //         return true; // Hatalı token geçersiz kabul edilir
  //     }
  // }
}
