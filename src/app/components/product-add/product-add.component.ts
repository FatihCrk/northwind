import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
//FormGroup; 
//FormBuilder;ReaciveForm'un servisi.(20. Ders) - Html ile controlleri ilişkilendirdiğimiz yer. Form oluşturmaya yarıyor.
//FormControl;
//Validators;   


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService,
    private toastrService: ToastrService) {

  }
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
      let productModel = Object.assign({}, this.productAddForm.value);//boş obje oluşturup creadeProductAdd'de yer alan productAddForm metodu içerisindeki prop.'ları atadık.
      this.productService.add(productModel).subscribe(response=> {

        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{console.log(responseError) 
      this.toastrService.error(responseError.error)
      })
       
      

    }
    else {
      this.toastrService.error("Formda boş alanlar var veya hatalı bir işlem yaptınız.", "Hata")

    }





  }

}
