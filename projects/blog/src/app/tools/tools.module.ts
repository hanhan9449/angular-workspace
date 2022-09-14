import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { VendorsModule } from '@vendors';
import { QrCodeModule } from '@tools';
import { ToolsComponent } from './tools.component';
import {SharedModule} from "@shared";


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
