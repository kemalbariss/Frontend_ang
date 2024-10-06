// import { CanActivateFn } from '@angular/router';
// // import { LoginserviceService } from './loginservice.service';
// // import { Inject } from '@angular/core';
// // import { jwtDecode } from 'jwt-decode';

// // export const AuthGuard: CanActivateFn = (route, state) => {

// //   const loginService = Inject(LoginserviceService);

// //   const token = loginService.getToken();


// //   if (!token || isTokenExpired(token)) {
// //     // Token yoksa veya süresi dolmuşsa
// //     return false; // Giriş sayfasına yönlendirilir
// //   }


// //   return true;
// // };

// // function isTokenExpired(token: string): boolean {
// //   try {
// //     const decoded: any = jwtDecode(token);
// //     const expirationDate = new Date(decoded.exp * 1000); // Exp alanını milisaniyeye çevirin
// //     return expirationDate < new Date(); // Eğer geçerli tarih, expirationDate'den küçükse token süresi dolmuş demektir
// //   } catch (error) {
// //     console.error('Token decode hatası:', error);
// //     return true; // Hatalı token geçersiz kabul edilir
// //   }
// // }

// 