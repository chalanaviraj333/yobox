import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mypoints',
  templateUrl: './mypoints.component.html',
  styleUrls: ['./mypoints.component.scss'],
})
export class MypointsComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  _onClickDismiss() {
    this.modalController.dismiss();
  }

}
