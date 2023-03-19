import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

//currentCategory:Category Classını atamak için tsconfig'de ayar yaptık. Diğer türlü currentCategory: Category = {categoryId:0, categoryName:" "} şeklinde tanımlamamız veya newlememiz gerekiyordu
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
currentCategory : Category;
  
  constructor(private categoryServices: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();


  }

  getCategories() {

    this.categoryServices.getCategories().subscribe(response => {
      this.categories = response.data;

    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;

  }

getCurrentCategoryClass(category:Category){
  if(category == this.currentCategory){
    return "list-group-item active"
  }
  else{return "list-group-item"}
}
}
