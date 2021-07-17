import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MypointsComponent } from './mypoints/mypoints.component';
import { SearchpagePage } from './searchpage/searchpage.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modalController: ModalController) { }

  async onClickSearch() {
    const modal = await this.modalController.create({
      component: SearchpagePage,
      cssClass: 'my-search-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickMyPoints() {
    const modal = await this.modalController.create({
      component: MypointsComponent,
      cssClass: 'my-points-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }
}
