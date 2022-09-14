import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { VendorsModule } from '@vendors';
import { FirebaseUIModule } from 'firebaseui-angular';
import {SharedModule} from "@shared";
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import {firebaseUiAuthConfig} from "../../environments/firebaseui-config";


@NgModule({
  declarations: [
    AdminComponent,
    SignInDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    VendorsModule,
    SharedModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ]
})
export class AdminModule { }
