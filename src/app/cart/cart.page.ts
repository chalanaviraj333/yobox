import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Cartitems } from '../cartitems';
import { CartserviceService } from '../cartservice.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cartItems: Array<Cartitems> = [];

  constructor(public cartService: CartserviceService, private authServie: AuthserviceService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
  }

  checkUserId() {

  }

  onclickLogout() {
    this.authServie.logout();
  }

  onClickQincrese(cartItemKey) {
    const selectedItem : Cartitems = this.cartItems.find(product => product.key === cartItemKey);

    if (selectedItem.selectedQuantity < selectedItem.itemMaxQuantity){
      selectedItem.selectedQuantity = selectedItem.selectedQuantity + 1;
    }

  }

  onClickQdecrese(cartItemKey) {
    const selectedItem : Cartitems = this.cartItems.find(product => product.key === cartItemKey);

    if (selectedItem.selectedQuantity > selectedItem.itemMinQuantity){
      selectedItem.selectedQuantity = selectedItem.selectedQuantity - 1;
    }

  }

  onClickItemRemove(productkey) {

    const index = this.cartItems.findIndex(item => item.key === productkey);
    if (index > -1) {
      this.cartItems.splice(index, 1);

      const data = JSON.stringify(this.cartItems);
      Storage.set({
        key: 'cartItems',
        value: data,
      });
    }
  }

}
