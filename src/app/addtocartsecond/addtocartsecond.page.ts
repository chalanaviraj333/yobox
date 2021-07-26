import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cartitems } from '../cartitems';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-addtocartsecond',
  templateUrl: './addtocartsecond.page.html',
  styleUrls: ['./addtocartsecond.page.scss'],
})
export class AddtocartsecondPage implements OnInit {

  @Input() selectedProduct : Product;

  public itemQuantity = [1,2,3,4,5,6,7,8,9,10];
  public selectedquantity: number = 1;
  public selecteditemTotal: number;



  constructor(public modalController: ModalController, public cartService: CartserviceService) { }

  ngOnInit() {
    this.selecteditemTotal = this.selectedProduct.productoursellingprice;
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  onClickItemQuantity(selectedquantity) {
    this.selectedquantity = selectedquantity;
    this.selecteditemTotal = this.selectedProduct.productoursellingprice * selectedquantity;
  }

  onClickAddtoCart() {

    const selectedItemwithAmount: Cartitems = this.selectedProduct;

    selectedItemwithAmount.selectedQuantity = this.selectedquantity;

    this.cartService.addtoCart(selectedItemwithAmount);
    console.log(selectedItemwithAmount);
  }


}
