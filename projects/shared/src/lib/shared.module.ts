import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { TitleDirective } from './title/title.directive';
import { DebugDirective } from './debug/debug.directive';



@NgModule({
  declarations: [
    SharedComponent,
    TitleDirective,
    DebugDirective
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
    TitleDirective,
    DebugDirective
  ]
})
export class SharedModule { }
