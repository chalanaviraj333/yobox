import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.page.html',
  styleUrls: ['./termsandconditions.page.scss'],
})
export class TermsandconditionsPage implements OnInit {

  @Input() headerTitle : string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  onClickModalDismiss() {
    this.modalController.dismiss();
  }

}
