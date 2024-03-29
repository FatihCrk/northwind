import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

  //Layer gibi Sayfa Oluştururken Kullanıyoruz. Componenti çağırdığımız yer.
  // pathMatch:"full" eski versiyonlarda kullanıyoruz. Tam adres rota yapılanmasını sağlar.
  { path: "", pathMatch: "full", component: ProductComponent },
  { path: "products", component: ProductComponent },
  //path:"pathyolu:değişkenId"
  { path: "products/category/:categoryId", component: ProductComponent },

  //Ürün eklenmek istediğinde Login sayfasına yönlendirir. 
  { path: "products/add", component: ProductAddComponent,canActivate:[LoginGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
