import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../categories';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public allCategories: Array<Categories> = [
  {categoryName: 'Baby Products', categoryIcon: 'assets/icon/babyproducts.svg'},
  {categoryName: 'Beverages', categoryIcon: 'assets/icon/beverage.svg'},
  {categoryName: 'Cooking Essentials', categoryIcon: 'assets/icon/condiments.svg'},
  {categoryName: 'Dairy', categoryIcon: 'assets/icon/dairy.svg'},
  {categoryName: 'Detergent', categoryIcon: 'assets/icon/detergent.svg'},
  {categoryName: 'House Hold', categoryIcon: 'assets/icon/household.svg'},
  {categoryName: 'Noodles & Pasta', categoryIcon: 'assets/icon/noodlesandpasta.svg'},
  {categoryName: 'Personal Care', categoryIcon: 'assets/icon/personalcare.svg'},
  {categoryName: 'Rice', categoryIcon: 'assets/icon/rice.svg'},
  {categoryName: 'Seeds & Spices', categoryIcon: 'assets/icon/seedandspice.svg'},
  {categoryName: 'Snacks & Biscuits', categoryIcon: 'assets/icon/biscuits.svg'},
  {categoryName: 'Tea & Coffee', categoryIcon: 'assets/icon/teaandcoffee.svg'}
]

  constructor(private router: Router, public allhttp: AllhttpService) {}

  onClickCategories(selectedCategoryName) {

    const selectedCategoryNamewithoutSpace = selectedCategoryName.replace(/\s/g, "");

    this.router.navigateByUrl("tabs/tab2/selectcategoryitems/" + selectedCategoryNamewithoutSpace);
  }

  ngOnInit() {
    this.allhttp.getAllProducts();
  }

}
