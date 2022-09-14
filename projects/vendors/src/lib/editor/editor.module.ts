import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { VendorsModule } from '../vendors.module';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import {MarkdownModule} from "ngx-markdown";
import {SharedModule} from "@shared";



@NgModule({
  declarations: [
    EditorComponent,
    CancelDialogComponent
  ],
    imports: [
        CommonModule,
        VendorsModule,
        MarkdownModule,
        SharedModule
    ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
