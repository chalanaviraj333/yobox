import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  public allProducts: Array<Product> = [];
  public searchedItems: Array<Product> = [];


  constructor(private http: HttpClient) { }

  getAllProducts() {

    this.allProducts = [];

    this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.allProducts.push({
              key,
              productnumber: resData[key].productnumber,
              productname: resData[key].productname,
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
      });
      return this.allProducts;
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

  filterButton(selectedfilter) {

    const clickedFilter = selectedfilter;
     if (clickedFilter == 'PriceHighttoLow')

     {
      this.searchedItems.sort((a, b) => (a.productoursellingprice > b.productoursellingprice ? -1 : 1));

     }
     else if (clickedFilter == 'PriceLowtoHigh') {
      this.searchedItems.sort((a, b) => (a.productoursellingprice > b.productoursellingprice ? 1 : -1));
     }
     else if (clickedFilter == 'AtoZ') {
      this.searchedItems.sort((a, b) => (a.productname > b.productname ? 1 : -1));
     }
     else if (clickedFilter == 'ZtoA') {
      this.searchedItems.sort((a, b) => (a.productname > b.productname ? -1 : 1));
     }


  }

}
