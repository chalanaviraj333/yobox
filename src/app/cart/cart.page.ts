import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Cartitems } from '../cartitems';
import { CartserviceService } from '../cartservice.service';

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

    selectedItem.selectedQuantity = selectedItem.selectedQuantity + 1;
  }

  onClickQdecrese(cartItemKey) {
    const selectedItem : Cartitems = this.cartItems.find(product => product.key === cartItemKey);

    selectedItem.selectedQuantity = selectedItem.selectedQuantity - 1;
  }

}
