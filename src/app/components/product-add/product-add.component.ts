import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
//FormGroup; 
//FormBuilder;ReaciveForm'un servisi.(20. Ders) - Html ile controlleri ilişkilendirdiğimiz yer. Form oluşturmaya yarıyor.
//FormControl;
//Validators;   


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit{
  productAddForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {

}
ngOnInit(): void{ 

}
createProductAdd( ) 
{
  this.productAddForm = this.formBuilder.group({
    productName:["",Validators.required],
    unitPrice:["",Validators.required],
    unitInStock:["",Validators.required],
    categoryId:["",Validators.required]
  })
}

}
