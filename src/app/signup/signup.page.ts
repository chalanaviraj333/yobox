import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthserviceService } from '../authservice.service';
import { UserDetails } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private newUser: UserDetails = {};

  constructor(private authService: AuthserviceService, private alertCtrl: AlertController, private http: HttpClient) { }

  ngOnInit() {
  }

onSubmit(form: NgForm) {

    const email = form.value.username;
    const password = form.value.passwordone;

    this.authService.signup(email,password).subscribe(resData => {

      if (resData.localId) {

        this.newUser.userID = resData.localId;

        this.http.post<{name: string}>("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/allusers.json", this.newUser)
      .subscribe(usersaveResData => {
          console.log(usersaveResData);

        }
      );

      }


    }, errorRes => {
      const code= errorRes.error.error.message;
      console.log(errorRes);
      let message ="Could not sign up";
      if (code === 'EMAIL_EXISTS') {
        message = 'This email already exists!';
      }
      this.showAlert(message);
    }

    );

      // this.http.post<{name: string}>("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/allusers.json", this.newUser)
      // .subscribe(usersaveResData => {
      //     console.log(usersaveResData);

      //   }
      // );
  }

  private showAlert(message: string) {
    this.alertCtrl.create({header: 'Signup failed',
    message: message, buttons: ['Okay']}).
    then(alertEl => alertEl.present());
  }

}
