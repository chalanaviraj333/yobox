import { Component, OnInit } from '@angular/core';
import { OrderconfirmService } from '../orderconfirm.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private orderService: OrderconfirmService) { }

  ngOnInit() {
  }

  checkUserId() {
    this.orderService.savenewOrder();
  }

}
