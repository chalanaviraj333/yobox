import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderconfirmService {

  public newOrder: Order;

  constructor(private authService: AuthserviceService) { }

  savenewOrder() {

    this.authService.userId.pipe(take(1)).subscribe(userId => {
      if (!userId) {
        return
      }

      const userID: string = userId;
      console.log(userID);

    })

  }
}
