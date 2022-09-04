import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from './qr-code.component';



@NgModule({
  declarations: [
    QrCodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QrCodeComponent
  ]
})
export class QrCodeModule { }
