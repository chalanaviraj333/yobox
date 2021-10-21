import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { AuthserviceService } from '../authservice.service';
import { Storage } from '@capacitor/storage';
import { UserDetails } from '../user';
import { AllhttpService } from '../service/allhttp.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public deliveryDate: string = '';
  public currentUser: UserDetails ={};

  constructor(private http: HttpClient, private modalServie: ModalService, public cartService: CartserviceService,
    public authService: AuthserviceService, public allhttp: AllhttpService) {}

  ngOnInit() {

    // get all products
    this.allhttp.getAllProducts();

    // get loggeduserCfeditlimit
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

    // get cart items
    this.cartService.getCartDataStorage();

    // get delivery date
    const currentDate: Date = new Date;
    if (currentDate.getDay() < 3){
      this.deliveryDate = 'Friday';
    }
    else if (currentDate.getDay() > 2 && currentDate.getDay() < 7) {
      this.deliveryDate = 'Tuesday';
    }
    else {
      this.deliveryDate = 'Friday';
    }


    // checking user login or not
    this.authService.getStorageData();
  }

  async onClickItemAddSpecial(selectedproductKey) {

    const selectedItem : Product = this.allhttp.allProducts.find(product => product.key === selectedproductKey);

    await this.modalServie.onClickAddButton(selectedItem);
  }

  async onClickItemAddOrderAgain(selectedproductKey) {

    const selectedItem : Product = this.allhttp.allProducts.find(product => product.key === selectedproductKey);

    await this.modalServie.onClickAddButton(selectedItem);
  }


  async onClickmyPoints() {

    await this.modalServie.onClickMyPoints();

  }

  async onClickSignUp()
  {
    await this.modalServie.onClickSignUp();
  }


  async onClickLogIn() {
    await this.modalServie.onClickLogIn();
  }

  signoutButton() {
    this.authService.logout();
  }


}
