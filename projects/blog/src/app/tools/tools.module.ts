import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { VendorsModule } from 'projects/vendors/src/public-api';


@NgModule({
  declarations: [
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    VendorsModule
  ]
})
export class ToolsModule { }
