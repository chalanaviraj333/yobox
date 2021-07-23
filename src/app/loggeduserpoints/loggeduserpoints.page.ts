import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDetails } from '../user';
import { Storage } from '@capacitor/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loggeduserpoints',
  templateUrl: './loggeduserpoints.page.html',
  styleUrls: ['./loggeduserpoints.page.scss'],
})
export class LoggeduserpointsPage implements OnInit {
  public currentUser: UserDetails ={};

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    Storage.get({ key: 'authData' }).then((storedData) => {
      if (!storedData || !storedData.value) {
        return;
      }
      const parsedData = JSON.parse(storedData.value) as {
        token: string;
        tokenExpirationDate: string;
        userId: string;
        email: string;
      };

      this.http
      .get<{ [key: string]: UserDetails }>(
        'https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/allusers.json'
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (resData[key].userID == parsedData.userId) {
              this.currentUser = resData[key];
            }
          }
        }
      });
    });

  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }
}
