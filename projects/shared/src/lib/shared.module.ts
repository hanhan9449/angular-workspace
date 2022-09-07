import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { TitleDirective } from './title/title.directive';



@NgModule({
  declarations: [
    SharedComponent,
    TitleDirective
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
    TitleDirective
  ]
})
export class SharedModule { }
