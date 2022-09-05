import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AuthModule } from 'projects/shared/src/public-api';
import { FirebaseAppModule } from '@angular/fire/app';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    VendorsModule,
    FirebaseUIModule
  ]
})
export class AdminModule { }
