import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../categories';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public allCategories: Array<Categories> = [{categoryName: 'Rice', categoryIcon: 'assets/icon/rice.svg'},
  {categoryName: 'Canned Foods', categoryIcon: 'assets/icon/cannedfood.svg'},
  {categoryName: 'Baking Goods', categoryIcon: 'assets/icon/drybakinggoods.svg'},
  {categoryName: 'Biscuits', categoryIcon: 'assets/icon/biscuits.svg'},
  {categoryName: 'Condiments', categoryIcon: 'assets/icon/condiments.svg'},
  {categoryName: 'Cleaners', categoryIcon: 'assets/icon/cleaners.svg'},
  {categoryName: 'Personal Care', categoryIcon: 'assets/icon/personalcare.svg'},
  {categoryName: 'Other', categoryIcon: 'assets/icon/others.svg'}
]

  constructor(private router: Router) {}

  onClickCategories(selectedCategoryName) {

    const selectedCategoryNamewithoutSpace = selectedCategoryName.replace(/\s/g, "");

    this.router.navigateByUrl("tabs/tab2/selectcategoryitems/" + selectedCategoryNamewithoutSpace);
  }

}
