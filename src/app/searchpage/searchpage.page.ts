import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { OtherService } from '../other.service';
import { Product } from '../product';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {

  public searchedItems: Array<Product> = [];
  public enteredValue: string = '';

  constructor(public modalController: ModalController, private http: HttpClient, public otherService: OtherService,
    public modalService: ModalService, public cartService: CartserviceService, private router: Router) { }

  ngOnInit() {
   this.otherService.getAllProducts();
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  _ionChange(event) {
    this.enteredValue = event.target.value;

    this.searchedItems = this.otherService.searchAllProducts(this.enteredValue);
  }

  onClickAddButton(productKey) {
    console.log(productKey);
  }

  onClickFilter() {
    this.modalService.onClickfilterItems();
  }

  onClickCartButton() {
    this.router.navigateByUrl('cart');
    this.modalController.dismiss();
  }

}
