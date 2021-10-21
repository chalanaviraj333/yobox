import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { Product } from '../product';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-buymoresavemore',
  templateUrl: './buymoresavemore.page.html',
  styleUrls: ['./buymoresavemore.page.scss'],
})
export class BuymoresavemorePage implements OnInit {

  constructor(public allhttp: AllhttpService, public modalController: ModalController, private modalService: ModalService) {}

  ngOnInit() {
    this.allhttp.getAllProducts();
  }

  async onClickAddButton(selectedproductKey) {

    const selectedItem : Product = this.allhttp.allProducts.find(product => product.key === selectedproductKey);

    await this.modalService.onClickAddButton(selectedItem);
  }


}
