import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { Product } from '../product';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(public allhttp: AllhttpService, private modalSerice: ModalService) {}

  ngOnInit() {
    this.allhttp.getAllProducts();
  }

  async onClickItemAdd(selectedproductKey) {

    const selectedItem : Product = this.allhttp.allProducts.find(product => product.key === selectedproductKey);

    await this.modalSerice.onClickAddButton(selectedItem);
  }

}
