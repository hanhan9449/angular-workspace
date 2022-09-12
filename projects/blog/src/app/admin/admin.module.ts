import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { VendorsModule } from 'vendors';
import { FirebaseUIModule } from 'firebaseui-angular';
import {SharedModule} from "shared";
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    SignInDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    VendorsModule,
    FirebaseUIModule,
    SharedModule
  ]
})
export class AdminModule { }
