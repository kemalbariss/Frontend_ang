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
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

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
    {path:'updatecategory', component: UpdatecategoryComponent},
    {path:'updatecustomer', component: UpdatecustomerComponent},
    {path:'updateorder', component: UpdateorderComponent},
    {path:'updateproduct', component: UpdateproductComponent},


    {path:'updatecategory/:id', component: UpdatecategoryComponent},
];
