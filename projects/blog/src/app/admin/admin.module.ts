import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { VendorsModule } from 'vendors';
import { FirebaseUIModule } from 'firebaseui-angular';
import {SharedModule} from "shared";


@NgModule({
  declarations: [
    AdminComponent
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
