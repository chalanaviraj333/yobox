import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddtocartmodalPage } from './addtocartmodal/addtocartmodal.page';
import { AddtocartsecondPage } from './addtocartsecond/addtocartsecond.page';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  public cartItemsQuantity: number = 0;

  constructor(public modalController: ModalController) { }

  async onClickAddButton(selectedItem) {
    const modal = await this.modalController.create({
      component: AddtocartsecondPage,
      componentProps: {
        "selectedProduct": selectedItem
      },
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  addtoCart() {
    this.cartItemsQuantity = this.cartItemsQuantity + 1;
    this.modalController.dismiss();
  }
}
