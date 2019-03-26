import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { LoginComponent } from "../components/login/login.component";
import { resolve, reject } from "q";
import { error } from "@angular/compiler/src/util";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
