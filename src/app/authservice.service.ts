import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  private _userIsAuthenticated = false;
  private _userId = null;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    // this._userIsAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {email: email, password: password}
    )
  }

  logout() {
    this._userIsAuthenticated = false;
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
