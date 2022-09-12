import { Component, OnInit } from '@angular/core';
import {AuthService} from "service";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {SignInDialogComponent} from "./sign-in-dialog/sign-in-dialog.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title = '管理'
  isSignIn$?: Observable<boolean>

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isSignIn$ = this.authService.isSignIn$
  }
  signIn() {
    const dialogRef = this.dialog.open(SignInDialogComponent)

  }
  async signOut() {
    await this.authService.signOut()
    this._snackBar.open('退出登录成功',undefined,{
      duration: 3000
    })
  }

}
