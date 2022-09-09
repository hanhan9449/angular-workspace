import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { VendorsModule } from 'vendors/src/public-api';
import { QrCodeModule } from 'tools/src/public-api';
import { ToolsComponent } from './tools.component';
import {SharedModule} from "shared/src/public-api";


@NgModule({
  declarations: [
    QrCodeComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    VendorsModule,
    QrCodeModule,
    SharedModule
  ]
})
export class ToolsModule { }
