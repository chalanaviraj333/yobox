import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private _user= new BehaviorSubject<User>(null);

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return !!user.token;
      } else {
        return false;
      }
  })

  );

}


  get userId() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.id;
      } else {
        return null;
      }
    }));
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    // this._userIsAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {email: email, password: password}
    ).pipe(tap(userData => {
      const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
      this._user.next(new User(userData.localId, userData.email, userData.idToken, expirationTime));
    }));
  }

  logout() {
    this._user.next(null);
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
    {email: email, password: password, returnSecureToken: true}
    )

  }
}


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAiG5T26GdEr0za8b4YX-c4pdGT5j__yqg",
//     authDomain: "muthukudamerchant-496e8.firebaseapp.com",
//     databaseURL: "https://muthukudamerchant-496e8-default-rtdb.firebaseio.com",
//     projectId: "muthukudamerchant-496e8",
//     storageBucket: "muthukudamerchant-496e8.appspot.com",
//     messagingSenderId: "500954422515",
//     appId: "1:500954422515:web:e1062f6db89ee9a9c82b86",
//     measurementId: "G-32RW9QBP4K"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
