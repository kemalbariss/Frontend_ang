import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddorderComponent } from './addorder/addorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';

export const routes: Routes = [

  
    {path:'category', component: CategoryComponent},
    {path:'customer', component: CustomerComponent},
    {path:'', component: LayoutComponent},
    {path:'login', component: LoginComponent},
    {path:'order', component: OrderComponent},
    {path:'product', component: ProductComponent},
    {path:'addcategory', component: AddcategoryComponent},
    {path:'addcustomer', component: AddcustomerComponent},
    {path:'addorder', component: AddorderComponent},
    {path:'addproduct', component: AddproductComponent},

];
