import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../modal.service';
import { Product } from '../product';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.page.html',
  styleUrls: ['./specialoffers.page.scss'],
})
export class SpecialoffersPage implements OnInit {


  constructor(public modalController: ModalController, private modalService: ModalService, public allhttp: AllhttpService) {}

  ngOnInit() {
    this.allhttp.getAllProducts();
  }

  async onClickAddButton(selectedproductKey) {

    const selectedItem : Product = this.allhttp.allProducts.find(product => product.key === selectedproductKey);

    await this.modalService.onClickAddButton(selectedItem);
  }

}
