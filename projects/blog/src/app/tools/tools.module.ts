import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { VendorsModule } from 'projects/vendors/src/public-api';
import { QrCodeModule } from 'projects/tools/src/lib/qr-code/qr-code.module';
import { ToolsComponent } from './tools.component';
import {SharedModule} from "../../../../shared/src/lib/shared.module";


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
