import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
export class MyprofilePage implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
  }

  onClickLogout() {
    this.authService.logout();
  }

}
