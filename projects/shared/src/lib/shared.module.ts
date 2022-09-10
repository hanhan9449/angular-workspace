import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { TitleDirective } from './title/title.directive';
import { DebugDirective } from './debug/debug.directive';
import { MediaQueryIfDirective } from './media-query-if.directive';



@NgModule({
  declarations: [
    SharedComponent,
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective
  ],
  imports: [
  ],
  exports: [
    SharedComponent,
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective
  ]
})
export class SharedModule { }
