import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { OrderconfirmService } from '../orderconfirm.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private orderService: OrderconfirmService, private authServie: AuthserviceService) { }

  ngOnInit() {
  }

  checkUserId() {
    this.orderService.savenewOrder();
  }

  onclickLogout() {
    this.authServie.logout();
  }

}
