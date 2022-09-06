import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  get isAdmin$() {
    return this.afAuth.authState.pipe(map(state => state?.email === 'haannn@qq.com'), startWith(false))
  }
}
