import { NgModule } from '@angular/core';
import { TitleDirective } from './title.directive';
import { DebugDirective } from './debug.directive';
import { MediaQueryIfDirective } from './media-query-if.directive';



@NgModule({
  declarations: [
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective
  ],
  imports: [
  ],
  exports: [
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective
  ]
})
export class SharedModule { }
