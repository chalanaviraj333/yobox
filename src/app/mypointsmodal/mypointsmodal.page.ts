import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDetails } from '../user';

@Component({
  selector: 'app-mypointsmodal',
  templateUrl: './mypointsmodal.page.html',
  styleUrls: ['./mypointsmodal.page.scss'],
})
export class MypointsmodalPage implements OnInit {

  public currentUser: UserDetails = {userID: '123jjqwjipjdjw',
    firstName: 'Chalana',
    lastName: 'Muthukuda',
    employeeNumber: '12342234',
    emailAddress: 'chalana.viraj@yahoo.com',
    mobileNumber: '0451717787',
    userType: 'gold',
    joinYear: '2012'};

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

}
