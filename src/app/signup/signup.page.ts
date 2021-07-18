import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  constructor(private authService: AuthserviceService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const email = form.value.username;
    const password = form.value.passwordone;

    console.log(form.value.username, form.value.passwordone);
    this.authService.signup(email,password).subscribe(resData => {
      console.log(resData);
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
  }

  private showAlert(message: string) {
    this.alertCtrl.create({header: 'Signup failed',
    message: message, buttons: ['Okay']}).
    then(alertEl => alertEl.present());
  }

}
