import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { MypointsmodalPage } from './mypointsmodal/mypointsmodal.page';
import { SearchpagePage } from './searchpage/searchpage.page';
import { SignupPage } from './signup/signup.page';

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
      component: MypointsmodalPage,
      cssClass: 'my-points-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickSignUp() {
    const modal = await this.modalController.create({
      component: SignupPage,
      cssClass: 'signup-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickLogIn() {
    const modal = await this.modalController.create({
      component: LoginPage,
      cssClass: 'login-page-class',
      swipeToClose: true
    });
    return await modal.present();

  }

}
