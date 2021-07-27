import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { CartserviceService } from '../cartservice.service';
import { ModalService } from '../modal.service';
import { AuthserviceService } from '../authservice.service';
import { Storage } from '@capacitor/storage';
import { UserDetails } from '../user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public specialProducts: Array<Product> = [];
  public orderAgain: Array<Product> = [];
  public deliveryDate: string = '';
  public currentUser: UserDetails ={};

  constructor(private http: HttpClient, private modalServie: ModalService, public cartService: CartserviceService,
    public authService: AuthserviceService) {}

  ngOnInit() {

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

    // getting Special products form database
    this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.specialProducts.push({
              key,
              productnumber: resData[key].productnumber,
              productname: resData[key].productname,
              imageUrl: resData[key].imageUrl,
              productmaxsellingprice: resData[key].productmaxsellingprice,
              productoursellingprice: resData[key].productoursellingprice,
              quantityinstock: resData[key].quantityinstock,
              productstorearea: resData[key].productstorearea,
              productshell: resData[key].productshell
            });
            this.specialProducts.sort((a, b) => (a.productnumber > b.productnumber ? 1 : -1));
          }
        }
      });

      // getting Order again products form database
      this.http
      .get<{ [key: string]: Product }>(
        "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.orderAgain.push({
              key,
              productnumber: resData[key].productnumber,
              productname: resData[key].productname,
              imageUrl: resData[key].imageUrl,
              productmaxsellingprice: resData[key].productmaxsellingprice,
              productoursellingprice: resData[key].productoursellingprice,
              quantityinstock: resData[key].quantityinstock,
              productstorearea: resData[key].productstorearea,
              productshell: resData[key].productshell
            });
            this.orderAgain.sort((a, b) => (a.productnumber > b.productnumber ? 1 : -1));
          }
        }
      });
  }

  async onClickItemAddSpecial(selectedproductKey) {

    const selectedItem : Product = this.specialProducts.find(product => product.key === selectedproductKey);

    await this.modalServie.onClickAddButton(selectedItem);
  }

  async onClickItemAddOrderAgain(selectedproductKey) {

    const selectedItem : Product = this.orderAgain.find(product => product.key === selectedproductKey);

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

  // ionViewWillEnter() {

  // }

}
