import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cartitems } from './cartitems';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  public cartItemsQuantity: number = 0;

  public cartItems: Array<Cartitems> = [];

  constructor(public modalController: ModalController) { }

  addtoCart(selectedItemwithAmount: Cartitems) {
    this.cartItems.push(selectedItemwithAmount);
    this.modalController.dismiss();
  }
}
