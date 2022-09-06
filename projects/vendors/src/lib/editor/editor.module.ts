import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { VendorsModule } from '../vendors.module';



@NgModule({
  declarations: [
    EditorComponent
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
