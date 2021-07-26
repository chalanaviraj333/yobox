import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AuthserviceService } from '../authservice.service';
import { ModalService } from '../modal.service';
import { UserDetails } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private allusersRegisted: Array<string> = [];
  public isChecked: boolean = false;

  constructor(
    private authService: AuthserviceService,
    public modalService: ModalService,
    private alertCtrl: AlertController,
    private http: HttpClient,
    public modalController: ModalController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.http
      .get<{ [key: string]: UserDetails }>(
        'https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/allusers.json'
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.allusersRegisted.push(resData[key].employeeNumber);
          }
        }
      });

  }

  async presentToast() {

    const toast = await this.toastController.create({
      header: 'Signup Successfully',
      message: 'it will take 24hrs to activate your account. Thank you for join with us',
      position: 'bottom',
      color: 'dark',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            this.modalController.dismiss();
          }
        }
      ]
    });
    await toast.present();
  }

  onSubmit(form: NgForm) {
    const enteredEmployeenumber: string = form.value.employeeNumber;

    const result = this.allusersRegisted.find((i) => i === enteredEmployeenumber);

    if (result == undefined) {
      const email = form.value.emailAddress;
      const password = form.value.password;

      this.authService.signup(email, password).subscribe(
        (resData) => {
          if (resData.localId) {
            const newUser: UserDetails = {
              userID: resData.localId,
              firstName: form.value.firstName,
              lastName: form.value.lastName,
              employeeNumber: form.value.employeeNumber,
              emailAddress: form.value.emailAddress,
              mobileNumber: form.value.mobileNumber,
              userType: 'broze',
              joinYear: String(new Date().getFullYear()),
              creditLeft: 0,
              cashLimit: 0,
            };

            this.http
              .post<{ name: string }>(
                'https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/allusers.json',
                newUser
              )
              .subscribe((usersaveResData) => {
                this.presentToast();

              });
          }
        },
        (errorRes) => {
          const code = errorRes.error.error.message;
          let message = 'Could not sign up';
          console.log(errorRes);
          if (code === 'EMAIL_EXISTS') {
            message = 'This email already exists!';
          }
          else if (code === 'MISSING_PASSWORD') {
            message = 'Missing Password!';
          }
          else if (code === 'INVALID_EMAIL') {
            message = 'Invalid emaill address!';
          }

          this.showAlert(message);
        }
      );

    }
    else {
      let message = 'This Employee Number already exist';
      this.showAlert(message);
      return;
    }
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({ header: 'Signup failed', message: message, buttons: ['Okay'] })
      .then((alertEl) => alertEl.present());
  }

  onClickModalDismiss() {
    this.modalController.dismiss();
  }

  onclickPrivacyPolicy(headerTitle: string) {
    this.modalService.onClicktermsprivacydeliveryterms(headerTitle);
  }
}
