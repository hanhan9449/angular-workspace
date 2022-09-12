import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult} from "firebaseui-angular";

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  handleFailure(res: FirebaseUISignInFailure): void {
    this._snackBar.open('登录失败，检查网络后重试',undefined,{
      duration: 3000
    })
  }
  handleSuccess(res: FirebaseUISignInSuccessWithAuthResult): void {
    this.dialogRef.close()
  }

}
