import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  _ionChange(event) {

  }

}
