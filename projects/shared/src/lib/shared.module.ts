import { NgModule } from '@angular/core';
import { TitleDirective } from './title.directive';
import { DebugDirective } from './debug.directive';
import { MediaQueryIfDirective } from './media-query-if.directive';
import { IsEmptyPipe } from './is-empty.pipe';



@NgModule({
  declarations: [
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective,
    IsEmptyPipe
  ],
  imports: [
  ],
  exports: [
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective,
    IsEmptyPipe
  ]
})
export class SharedModule { }
