import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { VendorsModule } from '@vendors';
import { QrCodeModule } from '@tools';
import { ToolsComponent} from './tools.component';
import {SharedModule, TOOL_ITEM_LIST} from "@shared";
import {toolList} from "./tool-list";


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
  ],
  providers: [
    {provide: TOOL_ITEM_LIST, useValue: toolList}
  ]
})
export class ToolsModule { }
