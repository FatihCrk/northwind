import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; // form oluşturmak için.
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
//FormGroup; 
//FormBuilder;ReaciveForm'un servisi.(20. Ders) - Html ile controlleri ilişkilendirdiğimiz yer. Form oluşturmaya yarıyor.
//FormControl;
//Validators;   Doğrulama için


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private toastrService: ToastrService) { }
  ngOnInit(): void {
    this.createProductAdd();
  }
  createProductAdd() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      categoryId: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required]

    })
  }

  addProduct() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value); //boş obje oluşturup creadeProductAdd'de yer alan productAddForm metodu içerisindeki prop.'ları atadık.

      this.productService.add(productModel).subscribe({
        next: (response) => {
          this.toastrService.success(response.message,"Başarılı");
        },
        error: (responseError) => {
          if (responseError.error.Errors.length>0) {
            console.log(responseError.error.Errors)
            for (let i = 0; i < responseError.error.Errors.length; i++) {
          
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
            }
           
          
          }
        }
      })
    }
    else {
      this.toastrService.error("Form hatalı girilmiş Lütfen kontrol ediniz.", "Dikkat");
    }


  }

}
