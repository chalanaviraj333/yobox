import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from '../user';

@Component({
  selector: 'app-mypointsmodal',
  templateUrl: './mypointsmodal.page.html',
  styleUrls: ['./mypointsmodal.page.scss'],
})
export class MypointsmodalPage implements OnInit {

  public currentUser: User = {username: 'Chalana Muthukuda', userType: 'broze', joinYear: '2012'};

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

}