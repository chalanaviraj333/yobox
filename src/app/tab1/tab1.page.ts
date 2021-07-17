import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public specialProducts: Array<Product> = [];

  constructor(private http: HttpClient, private modalServie: ModalService, public cartService: CartserviceService) {}

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
              productshell: resData[key].productshell
            });
            this.specialProducts.sort((a, b) => (a.productnumber > b.productnumber ? 1 : -1));
          }
        }
      });
  }

  async onClickItemAdd(selectedproductKey) {

    const selectedItem : Product = this.specialProducts.find(product => product.key === selectedproductKey);

    await this.cartService.onClickAddButton(selectedItem);
  }

  async onClickmyPoints() {

    await this.modalServie.onClickMyPoints();

  }

}
