import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.page.html',
  styleUrls: ['./specialoffers.page.scss'],
})
export class SpecialoffersPage implements OnInit {

  public specialProducts: Array<Product> = [];

  constructor(private http: HttpClient, public modalController: ModalController, public cartService: CartserviceService) {}

  ngOnInit() {
    this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.specialProducts.push({
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
            this.specialProducts.sort((a, b) => (a.productnumber > b.productnumber ? 1 : -1));
          }
        }

        let indexofProduct: number = 0;

        this.specialProducts.forEach(product => {
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

    const selectedItem : Product = this.specialProducts.find(product => product.key === selectedproductKey);

    await this.cartService.onClickAddButton(selectedItem);
  }

}
