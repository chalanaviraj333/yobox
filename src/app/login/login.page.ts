import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthserviceService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {

    const email = form.value.username;
    const password = form.value.password;

    this.authService.login(email,password).subscribe(resData => {
      console.log(resData);
      this.router.navigateByUrl('cart');
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

    // this.authService.login();
  }


  private showAlert(message: string) {
    this.alertCtrl.create({header: 'Signup failed',
    message: message, buttons: ['Okay']}).
    then(alertEl => alertEl.present());
  }

}
