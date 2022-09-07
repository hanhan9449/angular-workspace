import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { VendorsModule } from '../vendors.module';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';



@NgModule({
  declarations: [
    EditorComponent,
    CancelDialogComponent
  ],
  imports: [
    CommonModule,
    VendorsModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
