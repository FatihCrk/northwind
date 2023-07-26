import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    CartSummaryComponent,
    VatAddedPipe,
    FilterPipePipe,
    ProductAddComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

    FormsModule,


    // Animasyonlu Toastr için ekledik.
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),
    BrowserAnimationsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass : AuthInterceptor,multi:true } //Tüm servisler için Enjekte ediyoruz. 
    //AuthInterceptor ve çoklu kullanımı aktif ediyoruz.


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
