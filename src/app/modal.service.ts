import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoggeduserpointsPage } from './loggeduserpoints/loggeduserpoints.page';
import { LoginPage } from './login/login.page';
import { SearchpagePage } from './searchpage/searchpage.page';
import { SignupPage } from './signup/signup.page';
import { TermsandconditionsPage } from './termsandconditions/termsandconditions.page';

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
      component: LoggeduserpointsPage,
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
      presentingElement: await this.modalController.getTop()
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

  async onClicktermsprivacydeliveryterms(headerTitle) {
    const modal = await this.modalController.create({
      component: TermsandconditionsPage,
      componentProps: {
        "headerTitle": headerTitle
      },
      cssClass: 'termsandcons-page-class',
      swipeToClose: true
    });
    return await modal.present();

  }

}
