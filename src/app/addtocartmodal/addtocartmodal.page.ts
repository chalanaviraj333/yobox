import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-addtocartmodal',
  templateUrl: './addtocartmodal.page.html',
  styleUrls: ['./addtocartmodal.page.scss'],
})
export class AddtocartmodalPage implements OnInit {

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
    this.cartService.addtoCart();
  }

}
