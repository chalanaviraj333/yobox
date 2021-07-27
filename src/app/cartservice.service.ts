import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cartitems } from './cartitems';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  public cartItems: Array<Cartitems> = [];

  constructor(public modalController: ModalController) { }

  addtoCart(selectedItemwithAmount: Cartitems) {
    this.cartItems.push(selectedItemwithAmount);

    const data = JSON.stringify(this.cartItems);
      Storage.set({
        key: 'cartItems',
        value: data,
      });
    this.modalController.dismiss();
  }

  getCartDataStorage() {
    Storage.get({key: 'cartItems'}).then(
      storedData => {
        if (!storedData || !storedData.value) {
          return;
        }
        const parsedData = JSON.parse(storedData.value) as {
          key: string;
          productnumber: number;
          productname: string;
          imageUrl: string;
          productmaxsellingprice: number;
          productoursellingprice: number;
          quantityinstock: number;
          productstorearea: number;
          productshell: number;
          selectedQuantity: number;
          itemMaxQuantity: number;
          itemMinQuantity: number;
        };
        this.cartItems = Object.keys(parsedData).map(function(cartItem) {
          let addedItem = parsedData[cartItem];
          return addedItem;
        });
      });



  }
}
