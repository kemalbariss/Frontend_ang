import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [

  
    {path:'category', component: CategoryComponent},
    {path:'customer', component: CustomerComponent},
    {path:'', component: LayoutComponent},
    {path:'login', component: LoginComponent},
    {path:'order', component: OrderComponent},
    {path:'product', component: ProductComponent},

];
