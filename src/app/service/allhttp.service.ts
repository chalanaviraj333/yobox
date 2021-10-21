import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class AllhttpService {

  public allProducts: Array<Product> = [];
  public searchedItems: Array<Product> = [];
  public selectedCategoryItems: Array<Product> = [];

  constructor(private http: HttpClient) { }


  getAllProducts() {
    if (this.allProducts.length == 0) {
      this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/all-products.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.allProducts.push({
              key,
              productnumber: resData[key].productnumber,
              productname: resData[key].productname,
              productCategory: resData[key].productCategory,
              imageUrl: resData[key].imageUrl,
              productmaxsellingprice: resData[key].productmaxsellingprice,
              productoursellingprice: resData[key].productoursellingprice,
              quantityinstock: resData[key].quantityinstock,
              productstorearea: resData[key].productstorearea,
              productshell: resData[key].productshell,
              cssClass: 'cssLeftClass'
            });
            this.allProducts.sort((a, b) => (a.productnumber > b.productnumber ? 1 : -1));
          }
        }

        let indexofProduct: number = 0;

        this.allProducts.forEach(product => {
         indexofProduct = indexofProduct + 1;
         if (indexofProduct % 2 == 0) {
          product.cssClass = "cssLeftClass";
         }
         else {
          product.cssClass = "cssRightClass";
         }

      });
      });
    }
  }

  searchAllProducts(enteredValue) {
    this.searchedItems = this.allProducts;

    if (enteredValue && enteredValue.trim() != '') {
      this.searchedItems = this.searchedItems.filter((item: Product) => {
        return (item.productname.toLowerCase().indexOf(enteredValue.toLowerCase()) > -1);
      });
    }

    let indexofProduct: number = 0;

        this.searchedItems.forEach(product => {
         indexofProduct = indexofProduct + 1;
         if (indexofProduct % 2 == 0) {
          product.cssClass = "cssLeftClass";
         }
         else {
          product.cssClass = "cssRightClass";
         }

      });

    return this.searchedItems;
  }

  getCategoryProducts(selectedCategory: string) {
    this.selectedCategoryItems = [];

    this.allProducts.forEach(product => {
      const productCato: string = product.productCategory.replace(/\s/g, "");
      if (productCato == selectedCategory) {
        this.selectedCategoryItems.push(product);
      }
    });
  }
}
