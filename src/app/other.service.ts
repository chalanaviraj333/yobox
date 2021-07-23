import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthserviceService } from './authservice.service';
import { UserDetails } from './user';

@Injectable({
  providedIn: 'root'
})
export class OtherService {


  constructor(private http: HttpClient, private authService: AuthserviceService) { }

}
