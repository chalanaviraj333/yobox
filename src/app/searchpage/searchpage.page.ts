import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { OtherService } from '../other.service';
import { Product } from '../product';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {

  public enteredValue: string = '';

  constructor(public modalController: ModalController, public allHttp: AllhttpService, public otherService: OtherService,
    public modalService: ModalService, public cartService: CartserviceService, private router: Router, public allhttp: AllhttpService) { }

  ngOnInit() {
   this.otherService.getAllProducts();
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  _ionChange(event) {
    this.enteredValue = event.target.value;
    this.allHttp.searchAllProducts(this.enteredValue);

    // this.searchedItems = this.allHttp.searchAllProducts(this.enteredValue);
  }

  async onClickAddButton(productKey) {
    const selectedItem : Product = this.allhttp.allProducts.find(product => product.key === productKey);

    await this.modalService.onClickAddButton(selectedItem);
  }

  onClickFilter() {
    this.modalService.onClickfilterItems();
  }

  onClickCartButton() {
    this.router.navigateByUrl('cart');
    this.modalController.dismiss();
  }

}
