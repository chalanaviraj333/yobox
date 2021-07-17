import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectitemquantityComponent } from './selectitemquantity/selectitemquantity.component';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  public cartItemsQuantity: number = 0;

  constructor(public modalController: ModalController) { }

  async onClickAddButton(selectedItem) {
    const modal = await this.modalController.create({
      component: SelectitemquantityComponent,
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
