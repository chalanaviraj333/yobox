import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { Product } from '../product';

@Component({
  selector: 'app-buymoresavemore',
  templateUrl: './buymoresavemore.page.html',
  styleUrls: ['./buymoresavemore.page.scss'],
})
export class BuymoresavemorePage implements OnInit {

  public buymoresavemore: Array<Product> = [];

  constructor(private http: HttpClient, public modalController: ModalController, private modalService: ModalService) {}

  ngOnInit() {
    this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.buymoresavemore.push({
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
            this.buymoresavemore.sort((a, b) => (a.productnumber > b.productnumber ? 1 : -1));
          }
        }

        let indexofProduct: number = 0;

        this.buymoresavemore.forEach(product => {
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

    const selectedItem : Product = this.buymoresavemore.find(product => product.key === selectedproductKey);

    await this.modalService.onClickAddButton(selectedItem);
  }


}
