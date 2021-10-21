import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../modal.service';
import { Product } from '../product';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-select-category-items',
  templateUrl: './select-category-items.page.html',
  styleUrls: ['./select-category-items.page.scss'],
})
export class SelectCategoryItemsPage implements OnInit {

  public headerTitle: string = '';
  public selectedCategory: string = '';

  constructor(private activatedRoute: ActivatedRoute, public allHttp: AllhttpService, public modalController: ModalController, public modalService: ModalService) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("selectedCategory")) {
        // redirect
        return;
      }
      this.selectedCategory = paramMap.get("selectedCategory");
      const result = this.selectedCategory.replace( /([A-Z])/g, " $1" );
      this.headerTitle = result.charAt(0).toUpperCase() + result.slice(1);
    });
  }

  ngOnInit() {
    this.allHttp.getCategoryProducts(this.selectedCategory);
  }

  async onClickAddButton(selectedproductKey) {

    const selectedItem : Product = this.allHttp.selectedCategoryItems.find(product => product.key === selectedproductKey);

    await this.modalService.onClickAddButton(selectedItem);
  }

}
