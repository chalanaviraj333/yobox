import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-select-category-items',
  templateUrl: './select-category-items.page.html',
  styleUrls: ['./select-category-items.page.scss'],
})
export class SelectCategoryItemsPage implements OnInit {

  public headerTitle: string = '';
  public allProducts: Array<Product> = [];

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public modalController: ModalController, public cartService: CartserviceService) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("selectedCategory")) {
        // redirect
        return;
      }
      const headerParam = paramMap.get("selectedCategory");
      const result = headerParam.replace( /([A-Z])/g, " $1" );
      this.headerTitle = result.charAt(0).toUpperCase() + result.slice(1);
    });
  }

  ngOnInit() {
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

  async onClickAddButton(selectedproductKey) {

    const selectedItem : Product = this.allProducts.find(product => product.key === selectedproductKey);

    await this.cartService.onClickAddButton(selectedItem);
  }

}
